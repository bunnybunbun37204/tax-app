import { useState, type ChangeEvent } from 'react';
import {
  User,
  Users,
  Baby,
  Ghost,
  EarOff,
  Droplets,
  HeartPulse,
  Shrub,
  Landmark,
  ShieldCheck,
  Paperclip,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { AlertSure } from './alertSure';

const deductTypes = [
  { key: 'children', label: 'ค่าลดหย่อนบุตร', max: 60000, icon: Baby },
  { key: 'parents', label: 'ค่าลดหย่อนบิดามารดา', max: 30000, icon: Ghost },
  { key: 'disabledDependent', label: 'ค่าลดหย่อนผู้พิการหรือทุพพลภาพ', max: 60000, icon: EarOff },
  { key: 'pregnancy', label: 'ค่าฝากครรภ์และค่าทำคลอด', max: 60000, icon: Droplets },
  { key: 'lifeInsurance', label: 'เบี้ยประกันชีวิต/สุขภาพ', max: 100000, icon: HeartPulse },
  { key: 'socialSecurity', label: 'ประกันสังคม', max: 9000, icon: Shrub },
  { key: 'homeLoanInterest', label: 'ดอกเบี้ยเงินกู้ยืมจากธนาคาร', max: 100000, icon: Landmark },
  { key: 'donation', label: 'การบริจาค', max: Number.POSITIVE_INFINITY, icon: ShieldCheck },
];

export const AddDeductForm = () => {
  const [tab, setTab] = useState('input');

  // Initialize deduct and files state
  const initialDeductState: { [key: string]: string } = {};
  const initialFilesState: { [key: string]: File | null } = {};

  for (const type of deductTypes) {
    initialDeductState[type.key] = '';
    initialFilesState[type.key] = null;
  }

  const [deduct, setDeduct] = useState(initialDeductState);
  const [files, setFiles] = useState(initialFilesState);
  const [openAlert, setOpenAlert] = useState(false);

  const parseOrZero = (value: string) => Number.parseFloat(value) || 0;

  const handleSubmitted = () => {
    let totalDeduction = 0;
    const addIncome = parseOrZero(localStorage.getItem('salaryAfterTax') || '0');
    console.log('Additional Income:', addIncome);

    // Calculate total deduction using for...of loop
    for (const type of deductTypes) {
      let value = parseOrZero(deduct[type.key]);
      if (type.key === 'donation') {
        value = Math.min(value, addIncome * 0.1); // Ensure donation does not exceed 10% of addIncome
      }
      const limitedValue = Math.min(value, type.max);
      totalDeduction += limitedValue;
    }

    // Store the calculated data
    const inputData: { [key: string]: string } = {};
    for (const type of deductTypes) {
      inputData[type.key] = deduct[type.key];
    }
    inputData.calculated = totalDeduction.toString();

    const inputDataFile: { [key: string]: string | null } = {};
    for (const type of deductTypes) {
      inputDataFile[`${type.key}File`] = files[type.key]?.name || null;
    }

    console.log('Deductions Data:', JSON.stringify(inputData, null, 2));
    console.log('Uploaded Files:', JSON.stringify(inputDataFile, null, 2));

    // Save total deduction to localStorage
    localStorage.setItem('TotalDeduction', totalDeduction.toString());
    console.log('Total Deduction saved to localStorage:', totalDeduction);
    window.location.href = '/homes';
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const file = event.target.files?.[0] || null;
    setFiles((prevFiles) => ({ ...prevFiles, [key]: file }));
  };

  const isDisabled =
    Object.values(deduct).every((value) => value === '') &&
    Object.values(files).every((file) => file === null);

  return (
    <div className="flex flex-col ">
      <div className="text-blood text-start text-xl font-semibold font-notosansthai mb-4">
        เพิ่มลดหย่อนภาษี
      </div>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full grid-cols-2 rounded-md border border-blood bg-white py-0.5">
          {['input', 'upload'].map((value) => (
            <TabsTrigger
              key={value}
              value={value}
              className="text-black text-sm text-center font-normal font-notosansthai basis-1/2 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura">
              {value === 'input' ? 'กรอกค่าลดหย่อน' : 'อัพโหลดเอกสารค่าลดหย่อน'}
            </TabsTrigger>
          ))}
        </TabsList>

        {['input', 'upload'].map((content) => (
          <TabsContent
            key={content}
            value={content}
            className="max-w-md w-full flex flex-col gap-4 mt-4">
            <Card className="bg-transparent shadow-transparent border-transparent">
              <CardContent className="flex gap-4 flex-col p-0 mb-4">
                {deductTypes.map(({ key, label, icon: Icon, max }) => (
                  <div
                    key={key}
                    className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                    {content === 'input' ? (
                      <>
                        <Icon className="h-4 w-4 text-blood" />
                        <Input
                          value={deduct[key]}
                          type="number"
                          onChange={(e) =>
                            setDeduct((prev) => ({ ...prev, [key]: e.target.value }))
                          }
                          placeholder={`${label} (สูงสุด ${max} บาท)`}
                          className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                        />
                      </>
                    ) : (
                      <>
                        <Input
                          id={key}
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, key)}
                        />
                        <Label
                          htmlFor={key}
                          className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                          {files[key] ? `File Added: ${files[key].name}` : label}
                        </Label>
                        <Paperclip className="text-blood h-4 w-4" />
                      </>
                    )}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full p-0">
                <Button
                  onClick={() => setOpenAlert(true)}
                  disabled={isDisabled}
                  className="text-white h-10 text-sm font-medium font-notosansthai bg-blood rounded-md justify-center items-center inline-flex w-full hover:cursor-pointer hover:bg-sakura">
                  ยืนยันข้อมูล
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      {AlertSure(openAlert, setOpenAlert, handleSubmitted)}
    </div>
  );
};
