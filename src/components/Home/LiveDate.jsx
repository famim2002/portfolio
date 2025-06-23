
import React, { useEffect, useState } from "react";

const LiveDate = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [targetDay, setTargetDay] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate(); // e.g. 25
    const currentMonth = today.toLocaleString("default", { month: "long" }); // e.g. June
    const currentYear = today.getFullYear(); // e.g. 2025

    setTargetDay(dayOfMonth);
    setMonth(currentMonth);
    setYear(currentYear);

    // Animate day-by-day from 0 up to today
    let i = 0;
    const interval = setInterval(() => {
      setCurrentDay(i);
      i++;
      if (i > dayOfMonth) clearInterval(interval);
    }, 50); // 150ms per day (adjust for speed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center pt-2  md:pt-5  lg:pt-10 ">
      <div className="text-white text-5xl md:text-6xl font-bold  rounded-lg ">
        <h3 className=" flex items-end gap-3">
          <span className="text-[120px] md:text-[180px] lg:text-[220px]  xl:text-[280px] text-secondaryColor font-headerFont md:w-[150px] lg:w-[200px] xl:w-[300px]">
            {" "}
            {currentDay}{" "}
          </span>
          <span className="text-2xl font-headerFont font-light">{month},</span>
          <span className="text-2xl font-headerFont font-light">{year}</span>
        </h3>
      </div>
    </div>
  );
};

export default LiveDate;



