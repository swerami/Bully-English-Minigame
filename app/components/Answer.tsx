"use client";

import ValidateAnswerStore from "../hooks/ValidateAnswer";
import { ApiResponse } from "../page";

interface Props {
  items: ApiResponse;
}

const Answer = ({ items }: Props) => {
  const currentQuestion = ValidateAnswerStore(e => e.currentQuesiton)
  const hiddenWords = items.items
    .slice(currentQuestion, currentQuestion+1)
    .map((item) => item.Words.split(' '))
    .flat();

  const groupedWords: { [key: string]: string[] } = hiddenWords.reduce(
    (acc, word) => {
      const length = word.length.toString();

      if (!acc[length]) {
        acc[length] = [];
      }

      acc[length].push(word);
      return acc;
    },
    {} as { [key: string]: string[] }
  );

  const {submittedAnswers, started} = ValidateAnswerStore()

  const isBlurred = !started ? "blur-[3px] pointer-events-none" : "";

  return (
    <div className="flex flex-col w-full">
      {Object.keys(groupedWords).map((length, index) => (
        <div key={index} className={`flex flex-wrap justify gap-x-16 transition-all duration-300`}>
          {groupedWords[length].map((word, wordIndex) => (
            <div key={wordIndex} className="my-1 text-white">
              {word.includes(submittedAnswers.filter((w) => w === word.toLocaleUpperCase())[0]) ? word : word.replace(/./g, "_ ")}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Answer;
