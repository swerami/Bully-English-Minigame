"use client";


import { useEffect, useState } from "react";
import ValidateAnswerStore from "../hooks/ValidateAnswer";
import { HiPlay } from "react-icons/hi2";
import SelectQuestion from "./SelectQuestion";
import toast from "react-hot-toast";

const Timer = () => {
  let duration = 3 * 60
  const [time, setTime] = useState<number>(duration);

  const {started, setStarted, progress, resetSubmittedAnswers} = ValidateAnswerStore();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
  };

  useEffect(() => {
    if(!started) {
      setTime(duration)
    }
    if(time == 0) {
      setStarted(false);
      resetSubmittedAnswers()

      if(progress > 55){
        toast(`Congrats! You have passed the test! You answered ${progress}% outta total words`, {
          icon: "✅",
          className: `font-sans`
        })
      } else {
        toast("Time is up. You have failed miserably.", {
          icon: "⏰",
          className: `font-sans`
        })
      }


      setTime(duration);
    }
    if(progress == 100 && started){
      setStarted(false);
      resetSubmittedAnswers()
      setTime(duration)
      toast(`Congrats! You have passed the test! You answered ${progress}% outta total words`, {
        icon: "✅",
        className: `font-sans`
      })
      return 
    }
    if(started) {
      const interval = setInterval(() => {
        setTime((prev) => prev > 0 ? prev - 1 : prev);
        
      }, 1000);

      // cleanup
      return () => {
        clearInterval(interval);
      };
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, time]);

  return (
  <div className="flex flex-row mx-auto gap-4">
    <div className="text-3xl" style={{color: time <= 30 ? "red" : ""}}>{formatTime(time)}</div>
    <button 
     className=""
     onClick={() => setStarted(true)}>
      <HiPlay size={20} />
    </button>
    <SelectQuestion />
  </div>
  );
};

export default Timer;