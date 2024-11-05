import { Wallet } from 'lucide-react';
import { Coins } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Shirt } from 'lucide-react';
import { Folders } from 'lucide-react';
import { SquareDashed } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export const AddIncomeForm = () => {
  const [tab, setTab] = useState('input');
  const [salary, setSalary] = useState('');
  const [royalty, setRoyalty] = useState('');
  const [investment, setInvestment] = useState('');
  const [rent, setRent] = useState('');
  const [freelance, setFreelance] = useState('');
  const [contract, setContract] = useState('');
  const [other, setOther] = useState('');

  const [files, setFiles] = useState<{
    salaryFile: File | null;
    royaltyFile: File | null;
    investmentFile: File | null;
    rentFile: File | null;
    freelanceFile: File | null;
    contractFile: File | null;
    otherFile: File | null;
  }>({
    salaryFile: null,
    royaltyFile: null,
    investmentFile: null,
    rentFile: null,
    freelanceFile: null,
    contractFile: null,
    otherFile: null,
  });
  const onTabChange = (value: string) => {
    setTab(value);
  };
  const handleSubmitted = () => {
    const inputData = {
      Salary: salary,
      Royalty: royalty,
      Investment: investment,
      Rent: rent,
      Freelance: freelance,
      Contract: contract,
      Other: other,
    };

    console.log(JSON.stringify(inputData, null, 2));
  };
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileName: keyof typeof files,
  ) => {
    const file = event.target.files?.[0] || null;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileName]: file,
    }));
  };

  const handleSubmittedFile = () => {
    const inputData = {
      SalaryFile: files.salaryFile?.name,
      RoyaltyFile: files.royaltyFile?.name,
      InvestmentFile: files.investmentFile?.name,
      RentFile: files.rentFile?.name,
      FreelanceFile: files.freelanceFile?.name,
      ContractFile: files.contractFile?.name,
      OtherFile: files.otherFile?.name,
    };
    console.log(JSON.stringify(inputData, null, 2));
  };

  return (
    <div className="px-5 first-line:flex flex-col">
      {/* header */}
      <div className="text-blood text-start text-xl font-semibold font-notosansthai leading-7">
        เพิ่มรายได้หลังหักภาษี ณ ที่จ่าย
      </div>
      <Tabs value={tab} onValueChange={onTabChange}>
        <TabsList className="grid w-full grid-cols-2 rounded-md border border-blood bg-white py-0.5">
          <TabsTrigger
            value="input"
            className="text-black text-sm text-center font-normal font-notosansthai basis-1/2 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura"
            onClick={() => onTabChange('input')}>
            กรอกรายได้
          </TabsTrigger>
          <TabsTrigger
            value="upload"
            className="text-black text-sm text-center font-normal font-notosansthai basis-1/2 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura"
            onClick={() => onTabChange('upload')}>
            อัพโหลดไฟล์รายได้
          </TabsTrigger>
        </TabsList>
        {/* input content */}
        <TabsContent value="input" className="max-w-md w-full flex flex-col gap-4 mt-4">
          <Card className="bg-transparent shadow-transparent border-transparent">
            <CardContent className="flex gap-4 flex-col p-0 mb-4">
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Wallet className="h-4 w-4 text-blood" />
                <Input
                  value={salary}
                  type="number"
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="เงินเดือน โบนัส ค่าจ้าง"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Coins className="h-4 w-4 relative text-blood" />
                <Input
                  value={royalty}
                  type="number"
                  onChange={(e) => setRoyalty(e.target.value)}
                  placeholder="ค่าลิขสิทธิ์และสิทธิในทรัพย์สินทางปัญญา"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <ChartLine className="h-4 w-4 relative text-blood" />
                <Input
                  value={investment}
                  type="number"
                  onChange={(e) => setInvestment(e.target.value)}
                  placeholder="ดอกเบี้ย ปันผล กำไรจากCrypto"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Building2 className="h-4 w-4 relative text-blood" />
                <Input
                  value={rent}
                  type="number"
                  onChange={(e) => setRent(e.target.value)}
                  placeholder="ค่าเช่า"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Shirt className="h-4 w-4 relative text-blood" />
                <Input
                  value={freelance}
                  type="number"
                  onChange={(e) => setFreelance(e.target.value)}
                  placeholder="ฟรีแลนซ์"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Folders className="h-4 w-4 relative text-blood" />
                <Input
                  value={contract}
                  type="number"
                  onChange={(e) => setContract(e.target.value)}
                  placeholder=" ค่ารับเหมาทั้งค่าแรงและค่าของ"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <SquareDashed className="h-4 w-4 relative text-blood" />
                <Input
                  value={other}
                  type="number"
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="อื่น ๆ"
                  className="text-sakura text-sm font-normal font-notosansthai bg-transparent border-transparent placeholder:text-sakura focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                />
              </div>
            </CardContent>
            <CardFooter className="w-full p-0">
              <Button
                onClick={handleSubmitted}
                className="text-white h-10 text-sm font-medium font-notosansthai bg-blood rounded-md justify-center items-center inline-flex w-full hover:cursor-pointer">
                ยืนยันข้อมูล
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/* upload content */}
        <TabsContent value="upload" className="max-w-md w-full flex flex-col gap-4 mt-0">
          <Card className="bg-transparent shadow-transparent border-transparent">
            <CardContent className="flex gap-4 flex-col p-0 mb-4">
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="salary"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'salaryFile')}
                />
                <Label
                  htmlFor="salary"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.salaryFile ? `File Added: ${files.salaryFile.name}` : 'เงินเดือน โบนัส ค่าจ้าง'}
                </Label>
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="royalty"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'royaltyFile')}
                />
                <Label
                  htmlFor="royalty"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.royaltyFile
                    ? `File Added: ${files.royaltyFile.name}`
                    : 'ค่าลิขสิทธิ์และสิทธิในทรัพย์สินทางปัญญา'}
                </Label>
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="investment"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'investmentFile')}
                />
                <Label
                  htmlFor="investment"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.investmentFile
                    ? `File Added: ${files.investmentFile.name}`
                    : 'ดอกเบี้ย ปันผล กำไรจากCrypto'}
                </Label>
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="rent"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'rentFile')}
                />
                <Label
                  htmlFor="rent"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.rentFile ? `File Added: ${files.rentFile.name}` : 'ค่าเช่า'}
                </Label>
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="freelance"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'freelanceFile')}
                />
                <Label
                  htmlFor="freelance"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.freelanceFile ? `File Added: ${files.freelanceFile.name}` : 'ฟรีแลนซ์'}
                </Label>
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="contract"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'contractFile')}
                />
                <Label
                  htmlFor="contract"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.contractFile
                    ? `File Added: ${files.contractFile.name}`
                    : 'ค่ารับเหมาทั้งค่าแรงและค่าของ'}
                </Label>{' '}
                <Paperclip className="text-blood h-4 w-4" />
              </div>
              <div className="h-10 px-3 py-2 bg-white rounded-md border border-blood items-center gap-2 inline-flex">
                <Input
                  id="other"
                  type="file"
                  className="hidden"
                  onChange={(event) => handleFileChange(event, 'otherFile')}
                />
                <Label
                  htmlFor="other"
                  className="text-blood text-sm font-normal font-notosansthai w-full hover:cursor-pointer">
                  {files.otherFile ? `File Added: ${files.otherFile.name}` : 'อื่น ๆ'}
                </Label>{' '}
                <Paperclip className="text-blood h-4 w-4" />
              </div>
            </CardContent>
            <CardFooter className="w-full p-0">
              <Button
                onClick={handleSubmittedFile}
                className="text-white h-10 text-sm font-medium font-notosansthai bg-blood rounded-md justify-center items-center inline-flex w-full hover:cursor-pointer">
                ยืนยันข้อมูล
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
