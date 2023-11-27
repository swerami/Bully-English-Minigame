"use client";


import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(180);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="text-3xl mx-auto">{formatTime(time)}</div>;
};

export default Timer;