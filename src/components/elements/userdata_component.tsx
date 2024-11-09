import type React from 'react';
import { AlertSure } from './alertSure';
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
  const [dateError, setDateError] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [selectjob, setselectjob] = useState("");
  const [isJobSelected, setIsJobSelected] = useState(true);
  const job = ['อาชีพอิสระ','อาชีพรับจ้าง','อาชีพข้าราชการ','อาชีพเกษตรกรรม','อาชีพงานฝีมือ','อาชีพอุตสาหกรรม']
  const handleDateChange = (date: Date | null) => {
    setIdExpiredDate(date);
    setDateError(false); // Clear the error when a date is selected
  };
  const handlesubmitredirect = () => {
    window.location.href = '/personal-deduction';
  };
  const handlesubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    setOpenAlert(true);
    e?.preventDefault(); // Only call preventDefault if `e` is provided
    if (!idExpiredDate) {
      setDateError(true); // Show error if date is not selected
      return;
    }
    if (!selectjob) {
      setIsJobSelected(false); // Show error if nothing is selected
      return;
    }
    const formData = new FormData(e?.currentTarget || document.createElement('form'));

    const fname = formData.get('name');
    const lname = formData.get('lastname');
    const personal_id = formData.get('id');
    const id_expired_date = idExpiredDate;
    const back_id = formData.get('back_id');
    const address = formData.get('address');
    const prefix = tab;
    localStorage.setItem('job', JSON.stringify(selectjob))
    localStorage.setItem('fname', JSON.stringify(fname));
    localStorage.setItem('lname', JSON.stringify(lname));
    localStorage.setItem('personal_id', JSON.stringify(personal_id));
    localStorage.setItem('id_expired_date', JSON.stringify(id_expired_date));
    localStorage.setItem('back_id', JSON.stringify(back_id));
    localStorage.setItem('prefix', JSON.stringify(prefix));
    localStorage.setItem('address', JSON.stringify(address))
    console.log(localStorage);
  };

  return (
    <div className="flex flex-col mx-4 font-mono ">
      <label htmlFor="prefix" className="text-sm font-medium mb-2 font-notosansthai">
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
        <div className="relative">
          <Input
            name="name"
            type="text"
            pattern="^[A-Za-zก-ฮะ-๏ๆ฿\u0E30-\u0E4C]+$"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai  focus:border-pink-400 mt-2 placeholder-transparent peer"
            placeholder=""
            required
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/[^A-Za-zก-ฮะ-๏ๆ฿\u0E30-\u0E4C]/g, '');
            }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden">
            ชื่อจริง <span className="text-red-500">*</span>
          </span>
        </div>
        <div className="relative">
          <Input
            name="lastname"
            type="text"
            pattern="^[A-Za-zก-ฮะ-๏ๆ฿\u0E30-\u0E4C]+$"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai   focus:border-pink-400 mt-2 placeholder-transparent peer"
            placeholder=""
            required
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/[^A-Za-zก-ฮะ-๏ๆ฿\u0E30-\u0E4C]/g, '');
            }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden ">
            นามสกุล <span className="text-red-500">*</span>
          </span>
        </div>
        <div className="relative">
          <Input
            name="id"
            type="number"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai  focus:border-pink-400 mt-2 mb-2 placeholder-transparent peer"
            placeholder=""
            required
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              if (input.value.length > 13) input.value = input.value.slice(0, 13);
            }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden ">
            หมายเลขบัตรประชาชน <span className="text-red-500">*</span>
          </span>
        </div>
        <DatePicker onDateChange={setIdExpiredDate} />
        {dateError && <p className="text-red-500 text-sm">Please select a date</p>}
        <div className="relative">
          <Input
            name="back_id"
            type="text"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai   focus:border-pink-400 mt-2 placeholder-transparent peer"
            placeholder=""
            required
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              if (input.value.length > 12) input.value = input.value.slice(0, 12);
            }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden ">
            หมายเลขหลังบัตรประชาชน<span className="text-red-500">*</span>
          </span>
        </div>
        <Select onValueChange={(value) => setselectjob(value)}>
          <SelectTrigger className="w-full px-4 py-2 border border-[#c34e5e] rounded-md text-sakura placeholder:text-[#e4b0b9] font-[Noto Sans Thai] focus:border-pink-400 mt-2">
          <div className="flex items-center">
      {selectjob ? (
        <SelectValue /> // Displays the selected job when chosen
      ) : (
        <span className="text-[#e4b0b9] font-notosansthai text-sm">
          เลือกอาชีพ<span className="text-red-500">*</span>
        </span>
      )}
    </div>

          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className='w-full px-4 py-2 border  rounded-md text-blood placeholder:font-notosansthai  focus:border-pink-400'>อาชีพ</SelectLabel>
                {job.map((obj)=>(<SelectItem value = {obj} key = {obj} className='text-blood'>{obj}</SelectItem>))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {!isJobSelected && (
        <p className="text-red-500 mt-2">กรุณาเลือกอาชีพ</p>
          )}
        <div className="relative">
          <Input
            name="address"
            type="text"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai  focus:border-pink-400 mt-2 placeholder-transparent peer"
            placeholder=""
            required
            
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden">
            ที่อยู่ <span className="text-red-500 text-sm">*</span>
          </span>
        </div>
        <div className="relative">
          <Input
            name="address"
            type="text"
            className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] placeholder:font-notosansthai  focus:border-pink-400 mt-2 placeholder-transparent peer"
            placeholder=""
            required
            
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#e4b0b9] font-notosansthai text-sm peer-placeholder-shown:block peer-focus:hidden peer-valid:hidden">
            ที่ทำงาน <span className="text-red-500">*</span>
          </span>
        </div>
        
        <Button
          type="submit"
          className="w-full py-2 text-white bg-[#c34e5e] rounded-md hover:bg-pink-700 focus:outline-none mt-4 font-notosansthai">
          ต่อไป
        </Button>
      </form>
      {AlertSure(openAlert, setOpenAlert, handlesubmitredirect)}
    </div>
  );
};

export default UserdataComponent;
