import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePicker } from '@/components/ui/date-picker';
import { YearPicker } from '../ui/year-picker';
import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { getDate } from 'date-fns';

export const PersonalDeductions = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [genderSelected, setGenderSelected] = useState(false);
  const [disabilitySelected, setDisabilitySelected] = useState(false);
  const [statusSelected, setStatusSelected] = useState(false);
  const [birthSelected, setBirthSelected] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [Deduction1, setDeduction1] = useState(0);
  const [Deduction2, setDeduction2] = useState(0);

  const totalDeductions = Deduction1 + Deduction2;

  const handleYearSelect = (year: number | null) => {
    setSelectedYear(year);
    if (year && year >= getDate(year)) {
      setDeduction2(60000);
      setStatusSelected(true);
    }
  };
  const handleBirthSelect = (selectedDate: Date | null) => {
    if (selectedDate) {
      setBirthSelected(true);
    } else {
      setBirthSelected(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('Deduction', String(totalDeductions));
  }, [totalDeductions]);
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-blood">กรอกค่าลดหย่อน - ส่วนตัว</h4>
      <DatePicker onDateSelect={handleBirthSelect} />
      <div className="flex flex-col gap-1">
        <p>
          เพศ<span className="text-red-500">*</span>
        </p>
        <Tabs className="w-full h-fit rounded-[6px]">
          <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]" id="gender">
            <TabsTrigger
              className="w-full data-[state=active]:bg-sakura"
              value="ชาย"
              onClick={() => setGenderSelected(true)}>
              <p className="p-small text-black">ชาย</p>
            </TabsTrigger>
            <TabsTrigger
              className="w-full data-[state=active]:bg-sakura"
              value="หญิง"
              onClick={() => setGenderSelected(true)}>
              <p className="p-small text-black">หญิง</p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          คุณมีบัตรประจำตัวผู้พิการหรือไม่<span className="text-red-500">*</span>
        </p>
        <Tabs className="w-full  rounded-[6px] h-fit">
          <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
            <TabsTrigger
              className="w-full  data-[state=active]:bg-sakura"
              value="have"
              onClick={() => {
                setDeduction1(190000);
                setDisabilitySelected(true);
              }}>
              <p className="p-small text-black">มี</p>
            </TabsTrigger>
            <TabsTrigger
              className="w-full data-[state=active]:bg-sakura"
              value="Don'thave"
              onClick={() => {
                setDeduction1(0);
                setDisabilitySelected(true);
              }}>
              <p className="p-small text-black">ไม่มี</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="have">
            <div className="flex gap-1 bg-sakura bg-opacity-15 p-2 px-4 items-center rounded-[6px]">
              <CircleCheck className="size-[16px] text-emerald-500 fill-emerald-50" />
              <p className="text-xs">ได้สิทธิยกเว้นเงินได้ 190,000 บาท แรกแล้ว</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          สถานภาพ<span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col gap-1">
          <Tabs className="w-full  rounded-[6px] h-fit">
            <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
              <TabsTrigger
                className="w-full data-[state=active]:bg-sakura"
                value="sigle"
                onClick={() => {
                  setDeduction2(0);
                  setStatusSelected(true);
                }}>
                <p className="p-small text-black">โสด</p>
              </TabsTrigger>
              <TabsTrigger
                className="w-full data-[state=active]:bg-sakura"
                value="married"
                onClick={() => {
                  setStatusSelected(false);
                }}>
                <p className="p-small text-black">สมรส</p>
              </TabsTrigger>
              <TabsTrigger
                className="w-full data-[state=active]:bg-sakura"
                value="broken"
                onClick={() => {
                  setDeduction2(0);
                  setStatusSelected(false);
                }}>
                <p className="p-small text-black">หม้าย</p>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="broken">
              <div className="flex flex-col gap-1">
                <p>
                  เพิ่งอยู่ในสถานะหม้ายในปี 2024<span className="text-red-500">*</span>
                </p>
                <div className="flex flex-col gap-1">
                  <Tabs className="w-full  rounded-[6px] h-fit">
                    <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
                      <TabsTrigger
                        className="w-full data-[state=active]:bg-sakura"
                        value="yes"
                        onClick={() => {
                          setDeduction2(0);
                          setStatusSelected(false);
                        }}>
                        <p className="p-small text-black">ใช่</p>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full data-[state=active]:bg-sakura"
                        value="no"
                        onClick={() => {
                          setDeduction2(60000);
                          setStatusSelected(true);
                        }}>
                        <p className="p-small text-black">ไม่</p>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="yes">
                      <div className="flex flex-col gap-1">
                        <p>
                          สาเหตุ<span className="text-red-500">*</span>
                        </p>
                        <div className="flex flex-col gap-1">
                          <Tabs className="w-full  rounded-[6px] h-fit">
                            <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
                              <TabsTrigger
                                className="w-full data-[state=active]:bg-sakura"
                                value="broken"
                                onClick={() => {
                                  setDeduction2(60000);
                                  setStatusSelected(true);
                                }}>
                                <p className="p-small text-black">หย่าร้าง</p>
                              </TabsTrigger>
                              <TabsTrigger
                                className="w-full data-[state=active]:bg-sakura"
                                value="dead"
                                onClick={() => {
                                  setDeduction2(60000);
                                  setStatusSelected(true);
                                }}>
                                <p className="p-small text-black">เสียชีวิต</p>
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="dead">
                              <div className="flex gap-1 bg-sakura bg-opacity-15 p-2 px-4 items-center rounded-[6px]">
                                <CircleCheck className="size-[16px] text-emerald-500 fill-emerald-50" />
                                <p className="text-xs">ได้สิทธิยกเว้นเงินได้ 60,000 บาท</p>
                              </div>
                            </TabsContent>
                            <TabsContent value="broken">
                              <div className="flex gap-1 bg-sakura bg-opacity-15 p-2 px-4 items-center rounded-[6px]">
                                <CircleCheck className="size-[16px] text-emerald-500 fill-emerald-50" />
                                <p className="text-xs">ได้สิทธิยกเว้นเงินได้ 60,000 บาท</p>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="no">
                      <div className="flex gap-1 bg-sakura bg-opacity-15 p-2 px-4 items-center rounded-[6px]">
                        <CircleCheck className="size-[16px] text-emerald-500 fill-emerald-50" />
                        <p className="text-xs">ได้สิทธิยกเว้นเงินได้ 60,000 บาท</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="married">
              <div className="flex flex-col gap-1">
                <YearPicker onYearSelect={handleYearSelect} />
                <div className="flex gap-1 bg-sakura bg-opacity-15 p-2 px-4 items-center rounded-[6px]">
                  <CircleCheck className="size-[16px] text-emerald-500 fill-emerald-50" />
                  <p className="text-xs">ได้สิทธิยกเว้นเงินได้ 60,000 บาท</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Button
        onClick={() => setOpenAlert(true)}
        className="bg-blood hover:bg-sakura"
        disabled={!genderSelected || !disabilitySelected || !statusSelected || !birthSelected}>
        <p className="p-small">ยืนยันข้อมูล</p>
      </Button>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent className="max-w-[360px] p-2 border-blood gap-1">
          <AlertDialogTitle className="text-blood text-lg font-notosansthai px-2 pt-2">
            ยืนยันข้อมูล ?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sandy text-sm font-notosansthai px-2 mb-2">
            กรุณาตรวจสอบข้อมูลก่อนกดยืนยัน
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-20 text-blood hover:bg-sakura hover:bg-opacity-20 border-blood hover:text-blood text-sm font-notosansthai">
              ย้อนกลับ
            </AlertDialogCancel>
            <a href="/home">
              <AlertDialogAction className="bg-blood w-20 border-transparent hover:bg-sakura text-sm font-notosansthai">
                ยืนยัน
              </AlertDialogAction>
            </a>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
