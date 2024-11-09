import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Landmark } from 'lucide-react'; // Import Lucide icons

export function DetailHome() {
  const totalIncome = localStorage.getItem('salary') ?? '0';
  const totalDeduction = localStorage.getItem('TotalDeduction') ?? '0';
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="income" className="shadow-md rounded-xl">
        <AccordionTrigger className="flex justify-between items-center bg-white p-4 text-lg font-semibold border-b border-gray-300">
          <span>รายได้</span>
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-white flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <Landmark className="w-5 h-5 text-black" /> {/* Icon size adjusted */}
            <span className="text-base text-black font-normal font-notosansthai">รวมทั้งปี 2024</span>{' '}
            {/* Font size adjusted */}
          </div>
          <span className="font-normal font-notosansthai text-gray-900 text-base">
            {totalIncome}฿
          </span>{' '}
          {/* Font size adjusted */}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="expense" className="shadow-md rounded-xl">
        <AccordionTrigger className="flex justify-between items-center bg-white p-4 text-lg font-semibold border-b border-gray-300">
          <span>ลดหย่อน</span>
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-white flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <Landmark className="w-5 h-5 text-black" /> {/* Icon size adjusted */}
            <span className="text-base text-black font-normal font-notosansthai">รวมทั้งปี 2024</span>{' '}
            {/* Font size adjusted */}
          </div>
          <span className="font-normal font-notosansthai text-gray-900 text-base">
            {totalDeduction}฿
          </span>{' '}
          {/* Font size adjusted */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
