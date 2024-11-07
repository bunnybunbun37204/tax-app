import type React from 'react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePicker } from '@/components/ui/data-picker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const UserdataComponent = () => {
  const [tab, settab] = useState('นาง');
  const [idExpiredDate, setIdExpiredDate] = useState<Date | null>(null);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fname = formData.get('name');
    const lname = formData.get('lastname');
    const personal_id = formData.get('id');
    const id_expired_date = idExpiredDate;
    const back_id = formData.get('back_id');
    const prefix = tab;
  };

  return (
    <div className="flex flex-col mx-4 font-mono ">
      <label htmlFor="prefix" className="text-sm font-medium mb-2">
        คำนำหน้าชื่อ<span className="text-red-500">*</span>
      </label>
      <input type="hidden" id="prefix" name="prefix" value={tab} required />
      <div id="tabcontainer">
        <Tabs
          value={tab}
          onValueChange={settab}
          className="w-full"
          aria-labelledby="title-prefix-label">
          <TabsList className="grid w-full grid-cols-3 rounded-md border border-blood bg-white py-0.5">
            <TabsTrigger
              id="นาย"
              value="นาย"
              className="text-black text-sm text-center font-normal font-notosansthai basis-1/3 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura"
              onClick={() => {
                settab('นาย');
              }}>
              นาย
            </TabsTrigger>
            <TabsTrigger
              id="นาง"
              value="นาง"
              className="text-black text-sm text-center font-normal font-notosansthai basis-1/3 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura"
              onClick={() => {
                settab('นาง');
              }}>
              นาง
            </TabsTrigger>
            <TabsTrigger
              id="นางสาว"
              value="นางสาว"
              className="text-black text-sm text-center font-normal font-notosansthai basis-1/3 h-8 px-3 py-1.5 rounded-[3px] data-[state=active]:bg-sakura"
              onClick={() => {
                settab('นางสาว');
              }}>
              นางสาว
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <form onSubmit={handlesubmit}>
        <Input
          name="name"
          type="text"
          className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2"
          placeholder="ชื่อจริง"
          required
        />
        <Input
          name="lastname"
          type="text"
          className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2"
          placeholder="นามสกุล"
          required
        />
        <Input
          name="id"
          type="number"
          className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2 mb-2"
          placeholder="หมายเลขบัตรประชาชน"
          required
          maxLength={13}
        />
        <DatePicker onDateChange={setIdExpiredDate} />
        <Input
          name="back_id"
          type="text"
          className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]   focus:border-pink-400 mt-2"
          placeholder="หมายเลขหลังบัตรประชาชน"
          required
        />
        <Button
          type="submit"
          className="w-full py-2 text-white bg-[#c34e5e] rounded-md hover:bg-pink-700 focus:outline-none mt-4">
          ต่อไป
        </Button>
      </form>
    </div>
  );
};

export default UserdataComponent;