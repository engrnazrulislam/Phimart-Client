import { useEffect, useState } from "react";

const DiscountTimer = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25; //set 25 days coundown
    const getTimeRemaining = () => {
        const currentDate = new Date().getTime();
        const difference = targetDate - currentDate;
        return {
            days: Math.floor(difference / (1000*60*60*24)),
            hours:Math.floor((difference /(1000*60*60))%24),
            minutes:Math.floor((difference /(1000*60))%60),
            seconds:Math.floor((difference / 1000)%60),
        };
    };
    const [leftTime, setLeftTime] = useState(getTimeRemaining());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setLeftTime(getTimeRemaining())
        },1000)
        return () => clearInterval(timer) // Cleanup on unmount
    },[])
    return (
        <div className='flex justify-start gap-6 text-2xl font-bold text-gray-600'>
            <div>
                <span className="font-bold text-pink-600 text-2xl">{leftTime.days}</span> <br/>
                Days
            </div>
            <div>
                <span className="font-bold text-pink-600 text-2xl">{leftTime.hours}</span> <br/>
                Hrs
            </div>
            <div>
                <span className="font-bold text-pink-600 text-2xl">{leftTime.minutes}</span> <br/>
                Min
            </div>
            <div>
                <span className="font-bold text-pink-600 text-2xl">{leftTime.seconds}</span> <br/>
                Sec
            </div>
    </div>
    );
};

export default DiscountTimer;