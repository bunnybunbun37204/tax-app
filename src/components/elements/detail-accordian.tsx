import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Landmark } from 'lucide-react';

export function DetailHome() {
  const totalIncome = Number.parseFloat(localStorage.getItem('salary') ?? '0').toLocaleString();
  const totalDeduction = (
    Number.parseFloat(localStorage.getItem('Deduction') ?? '0') +
    Number.parseFloat(localStorage.getItem('deduction') ?? '0')
  ).toLocaleString();

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      <AccordionItem value="income" className="shadow-md rounded-xl overflow-hidden">
        <AccordionTrigger className="flex justify-between items-center bg-white p-4 text-lg font-semibold border-b border-gray-300 rounded-t-xl">
          <span>รายได้</span>
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-white flex justify-between items-center rounded-b-xl">
          <div className="flex items-center gap-2 text-gray-500">
            <Landmark className="w-5 h-5 text-black" />
            <span className="text-base text-black font-normal font-notosansthai">รวมทั้งปี 2024</span>
          </div>
          <span className="font-normal font-notosansthai text-gray-900 text-base">
            {totalIncome}฿
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="expense" className="shadow-md rounded-xl overflow-hidden">
        <AccordionTrigger className="flex justify-between items-center bg-white p-4 text-lg font-semibold border-b border-gray-300 rounded-t-xl">
          <span>ลดหย่อน</span>
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-white flex justify-between items-center rounded-b-xl">
          <div className="flex items-center gap-2 text-gray-500">
            <Landmark className="w-5 h-5 text-black" />
            <span className="text-base text-black font-normal font-notosansthai">รวมทั้งปี 2024</span>
          </div>
          <span className="font-normal font-notosansthai text-gray-900 text-base">
            {totalDeduction}฿
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
