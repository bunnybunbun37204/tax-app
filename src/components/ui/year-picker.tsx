'use client';

import * as React from 'react';
import { getYear, setYear } from 'date-fns';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { CalendarIcon } from 'lucide-react';

interface DatePickerProps {
  startYear?: number;
  endYear?: number;
}
export function YearPicker({
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()),
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | null>(null);
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const handleYearChange = (year: string) => {
    const newDate = setYear(new Date(), Number.parseInt(year));
    setDate(newDate);
  };

  return (
    <Select onValueChange={handleYearChange} value={date ? getYear(date).toString() : undefined}>
      <SelectTrigger className="w-full p-detail text-blood border-blood flex items-center justify-between ring-offset-transparent focus:ring-transparent  focus:ring-offset-transparent ">
        <div className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4 text-blood" />
          <SelectValue
            placeholder={
              <p className="p-detail text-[14px] text-sakura flex items-center">ปีที่จดทะเบียนสมรส*</p>
            }
          />
        </div>
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <SelectItem className="p-detail" key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
