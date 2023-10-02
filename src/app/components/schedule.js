"use client";
import { useState, useEffect } from 'react';

export const dynamic = "force-dynamic";
export default function Home() {
  const scheduleInSeconds = [
    28800, 31260, 31500, 33960,
    34260, 36900, 37200, 39660,
    39960, 42420, 42720, 45180,
    45480, 47940, 48240, 50700,
    50940, 53400, 53640, 56100
  ]
  const [timer, setTimer] = useState(new Date().getSeconds());
  const [pd, setPd] = useState(()=>{
    var time = new Date().getHours()*3600 + new Date().getMinutes()*60;
    for (var i = 0; i < scheduleInSeconds.length; i++) {
      if (time < scheduleInSeconds[i]) {
        if (i === 0) {
          return "Before School";
        } else {
          return `${(i-1)/2}`;
        }
      }
    }
    return "After School";
  });
  const [min, setMin] = useState(()=>{
    var time = new Date().getHours()*3600 + new Date().getMinutes()*60;
    if (typeof pd !== "string") {
        return scheduleInSeconds[parseFloat(pd)*2]/60 - time;
    } else if (pd === "Before School") {
        return (28800 - time)/60;
    } else {
        return (time - 56100)/60;
    }
  });


  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        setTimer(60);
        if (scheduleInSeconds.includes(new Date().getHours()*3600 + new Date().getMinutes()*60)) {
          setMin(0);
          setPd(pd => {
            if (pd === "After School") {
              return "Before School";
            } else if (pd === "Before School") {
              return "1"
            } else {
              return `${(parseInt(pd)+0.5)}`;
            }
          })
        } else {
          setMin(min + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
        <div className="sched">
          <div className="period">{pd}</div>
          <div className="time">
            <div className="min min-don">{min}</div>
            <p className="sec">{timer}</p>
            <div className="min min-to">{`${pd == "Before School" ? `${28800-min}`:
               pd === "After School" ? `${30300/60-min}`:
              `${(scheduleInSeconds[parseInt(pd)*2+1]-scheduleInSeconds[parseInt(pd)*2])/60-min}`
            }`}</div>
          </div>
        </div>
  )
}
