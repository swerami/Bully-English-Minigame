"use client";


import { useEffect, useState } from "react";
import ValidateAnswerStore from "../hooks/ValidateAnswer";
import { HiPlay } from "react-icons/hi2";
import SelectQuestion from "./SelectQuestion";


// priority queue

// TODO: Question only shows when you start the timer
// TODO: You can navigate between the 5 classes using select options 
// TODO: Redesign and deploy
// TODO: Handle smartasses who will remove the blur style using the dev tools
// TODO: ADD Scramble letters function


const Timer = () => {
  let duration = 3 * 60
  const [time, setTime] = useState<number>(duration);

  const {started, setStarted} = ValidateAnswerStore();

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
      console.log("Time is up");
      setStarted(false);
      setTime(duration);
    }
    if(started) {
      const interval = setInterval(() => {
        setTime((prev) => prev > 0 ? prev - 1 : prev);
        
      }, 1000);

      // cleanup
      return () => {
        clearInterval(interval);
        // setStarted(false);
      };
    }
  }, [started, time]);

  return (
  <div className="flex flex-row mx-auto gap-4">
    <div className="text-3xl">{formatTime(time)}</div>
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