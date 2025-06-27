import React, { useEffect, useState } from 'react';

const LiveDate = () => {
    const [currentDay, setCurrentDay] = useState(0);
    const [targetDay, setTargetDay] = useState(0);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        const today = new Date();
        const dayOfMonth = today.getDate(); // e.g. 25
        const currentMonth = today.toLocaleString('default', { month: 'long' }); // e.g. June
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
        <div className="flex items-center justify-center pt-5 py-5 lg:py-0 lg:pt-20 ">
            <div className="text-white text-5xl md:text-6xl font-bold  rounded-lg " >
                <h3 className=' flex flex-row md:flex-col lg:flex-row items-end gap-3'>
                    <span className='md:text-[120px] lg:text-[180px]  xl:text-[280px] text-secondaryColor font-headerFont md:w-[150px] lg:w-[200px] xl:w-[300px]'> {currentDay} </span>
                    <span className='text-2xl font-headerFont font-light'>
                        {month},</span>
                    <span className='text-2xl font-headerFont font-light'>
                        {year}</span></h3>
            </div>
        </div>
    );
};

export default LiveDate;




