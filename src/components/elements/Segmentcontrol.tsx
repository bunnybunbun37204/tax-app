import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

const SegmentedControl = () => {
  const [selected, setSelected] = useState('');

  

  
  return (
    <div className="flex flex-col mx-4">

      <label className="text-sm font-medium mb-2">
        คำนำหน้าชื่อ<span className="text-red-500">*</span>
      </label>
      <Menubar className='flex border border-[#c34e5e] rounded-lg overflow-hidden p-2 h-10'>
      <MenubarMenu >
        <MenubarTrigger className='flex-1 py-2 text-center items-center transition-colors duration-200 '>นาย</MenubarTrigger>
        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='flex-1 py-2  transition-colors duration-200'>นาง</MenubarTrigger>
        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='flex-1 py-2 text-center transition-colors duration-200'>นางสาว</MenubarTrigger>
        
      </MenubarMenu>
    </Menubar>
      
      <form  >
        <Input name="name" type="text" className='w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2' placeholder='ชื่อจริง'/>
        <Input name = "lastname"type="text" className='w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2' placeholder='นามสกุล'/>
        <Input name ="id" type="text" className='w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2' placeholder='หมายเลขบัตรประชาชน'/>
        <Input name = "id_expired_date" type="text" className='w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2' placeholder='วันหมดอายุบัตรประชาชน'/>
        <Input name = "back_id" type="text" className='w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9]  focus:border-pink-400 mt-2' placeholder='หมายเลขหลังบัตรประชาชน'/>
        <Button type="submit" className='w-full py-2 text-white bg-[#c34e5e] rounded-md hover:bg-pink-700 focus:outline-none mt-4' >ต่อไป</Button>
      </form>
    </div>

  );
};

export default SegmentedControl;