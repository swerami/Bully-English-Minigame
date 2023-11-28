"use client";


import { useEffect, useState } from "react";


// priority queue

// TODO: Question only shows when you start the timer
// TODO: You can navigate between the 5 classes using select options 
// TODO: Redesign and deploy


const Timer = () => {
  const [time, setTime] = useState(3*60);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev > 0 ? prev - 1 : prev);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="text-3xl mx-auto">{formatTime(time)}</div>;
};

export default Timer;