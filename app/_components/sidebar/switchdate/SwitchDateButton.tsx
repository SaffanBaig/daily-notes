"use client";
import { isDateEqual } from "@/app/utils/compareDate";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SwitchDateButton = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    initParams();
  }, []);

  useEffect(() => {
    console.log("CURRENT DAY ", currentDay);
    if (currentDay) {
      changeParams();
    }
  }, [currentDay]);

  const initParams = () => {
    const params = new URLSearchParams(searchParams);
    const date = params.get("date");
    if (date) {
      setCurrentDay(new Date(decodeURIComponent(date)));
    }
  };

  const changeParams = () => {
    const params = new URLSearchParams(searchParams);
    params.set("date", encodeURIComponent(currentDay.toDateString()));
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePreviousDayClick = () => {
    const date = new Date(currentDay);
    date.setDate(date.getDate() - 1);
    setCurrentDay(date);
  };

  const handleNextDayClick = () => {
    const date = new Date(currentDay);
    date.setDate(date.getDate() + 1);
    setCurrentDay(date);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <Button variant="outline" size="icon" onClick={handlePreviousDayClick}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button className="w-[160px]" variant="outline">
        {currentDay.toDateString()}
      </Button>
      <Button
        disabled={isDateEqual(currentDay, new Date())}
        variant="outline"
        size="icon"
        onClick={handleNextDayClick}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SwitchDateButton;
