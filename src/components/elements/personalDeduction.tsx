import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePicker } from '@/components/ui/date-picker';
import { YearPicker } from '../ui/year-picker';

const personalDeduction = () => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-blood">กรอกค่าลดหย่อน - ส่วนตัว</h4>
      <DatePicker />
      <div className="flex flex-col gap-1">
        <p>
          เพศ<span className="text-red-500">*</span>
        </p>
        <Tabs className="w-full h-fit rounded-[6px]">
          <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
            <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="men">
              <p className="p-small text-black">ชาย</p>
            </TabsTrigger>
            <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="women">
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
            <TabsTrigger className="w-full  data-[state=active]:bg-sakura" value="have">
              <p className="p-small text-black">มี</p>
            </TabsTrigger>
            <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="Don'thave">
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
          คุณมีบัตรประจำตัวผู้พิการหรือไม่<span className="text-red-500">*</span>
        </p>
        <Tabs className="w-full  rounded-[6px] h-fit">
          <TabsList className="w-full h-[40px] bg-white border-blood border-[1px]">
            <TabsTrigger className="w-full  data-[state=active]:bg-sakura" value="have">
              <p className="p-small text-black">มี</p>
            </TabsTrigger>
            <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="Don'thave">
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
              <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="sigle">
                <p className="p-small text-black">โสด</p>
              </TabsTrigger>
              <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="married">
                <p className="p-small text-black">สมรส</p>
              </TabsTrigger>
              <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="broken">
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
                      <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="yes">
                        <p className="p-small text-black">ใช่</p>
                      </TabsTrigger>
                      <TabsTrigger className="w-full data-[state=active]:bg-sakura" value="no">
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
                                value="broken">
                                <p className="p-small text-black">หย่าร้าง</p>
                              </TabsTrigger>
                              <TabsTrigger
                                className="w-full data-[state=active]:bg-sakura"
                                value="dead">
                                <p className="p-small text-black">เสียชีวิต</p>
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="married">
              <div className="flex flex-col gap-1">
                <YearPicker />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Button className="bg-blood hover:bg-sakura">
        <p className="p-small">ยืนยันข้อมูล</p>
      </Button>
    </div>
  );
};

export default personalDeduction;