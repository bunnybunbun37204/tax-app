import React, { useState } from 'react';
import { House, Plus, ListPlus, BarChart2, User } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const nav = () => {
  return (
    <div className="flex w-[393px] h-[82px] bg-sakura justify-between py-2">
      <a href="/homes">
        <div className="flex w-[74px] gap-1 flex-col items-center text-white">
          <House />

          <p className="small">หน้าหลัก</p>
        </div>
      </a>

      <div className="flex w-[74px] gap-1 flex-col items-center text-white">
        <ListPlus />
        <p className="small">ลดหย่อน</p>
      </div>
      <div className="flex w-[58px] text-white relative">
        <Popover>
          <PopoverTrigger>
            <div className="flex bg-jelly absolute p-5 top-[-40px] left-[-4px] rounded-full outline outline-4 outline-white">
              <Plus />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col rounded-[20px] p-4 bg-white shadow-sakuraeffect w-min h-min gap-1 absolute left-[-64px] top-[-232px]">
            <a href="/add-income">
              <p className="flex w-[150px] detail rounded-[6px] h-[40px] text-white items-center justify-center text-center bg-blood">
                เพิ่มรายได้
              </p>
            </a>
            <a href="/add-deduction">
              <p className="flex w-[150px] detail rounded-[6px] h-[40px] text-white items-center justify-center text-center bg-blood">
                เพิ่มรายได้
              </p>
            </a>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex w-[74px] gap-1 flex-col items-center text-white">
        <BarChart2 />
        <p className="small">ภาษีที่จ่าย</p>
      </div>
      <div className="flex w-[74px] gap-1 flex-col items-center text-white">
        <User />
        <p className="small">โปรไฟล์</p>
      </div>
    </div>
  );
};

export default nav;
