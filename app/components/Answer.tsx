"use client";

import ValidateAnswerStore from "../hooks/ValidateAnswer";
import { ApiResponse } from "../page";

interface Props {
  items: ApiResponse;
}

const Answer = ({ items }: Props) => {
  const hiddenWords = items.items
    .slice(0, 1)
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

  const submittedAnswers = ValidateAnswerStore((e) => e.submittedAnswers)


  return (
    <div className="bg-blue-300 flex flex-col">
      {Object.keys(groupedWords).map((length, index) => (
        <div key={index} className="flex flex-wrap justify-between gap-2">
          {groupedWords[length].map((word, wordIndex) => (
            <div key={wordIndex} className="">
              {word.includes(submittedAnswers.filter((w) => w === word.toLocaleUpperCase())[0]) ? word : word.replace(/./g, "_ ")}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Answer;
