"use client"

import React, { useEffect, useState } from "react";
import { ApiResponse } from "../page";
import ValidateAnswerStore from "../hooks/ValidateAnswer";

interface Props {
    data: ApiResponse
}

const Progress = ({data}: Props) => {

  const {currentQuesiton, submittedAnswers, setProgress} = ValidateAnswerStore()

  const answersCount = data.items[currentQuesiton].Words.split(" ").length

  const [percentage, setPercentage] = useState<number>(0) 
  const [currentColor, setCurrentColor] = useState("black")

useEffect(() => {
    const calcPct = ((submittedAnswers.length / answersCount) * 100).toFixed(2);

    const parsedPercentage = parseFloat(calcPct);

    setPercentage(parsedPercentage);
    setProgress(parsedPercentage)

    switch (true) {
        case parsedPercentage > 0 && parsedPercentage < 50:
            setCurrentColor("red");
            break;
        case parsedPercentage > 50:
            setCurrentColor("limegreen");
            break;
        default:
            setCurrentColor("white");
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [submittedAnswers, answersCount]);

  return <div
  className="mx-auto text-xl"
  style={{color: currentColor}}
  >{percentage}%</div>;
};

export default Progress;
