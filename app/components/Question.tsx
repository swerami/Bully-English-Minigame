"use client";

import React, { useEffect, useState } from 'react';
import { ApiResponse } from '../page';
import ValidateAnswerStore from '../hooks/ValidateAnswer';

interface Props {
  items: ApiResponse;
}

const Question = ({items}: Props) => {

  // handle duplicated puzzle letters
  const letters = items.items[0]['Letters Given'].split(' ').map((letter, index, array) => {
    if (array.indexOf(letter) !== index) {
      return letter.toLowerCase();
    }
    return letter;
  });

  const [hashmap, setHashmap] = useState(new Map());
  const chosenLetters = Array.from(hashmap.values());

  const {setSubmittedAnswers, submittedAnswers, started} = ValidateAnswerStore()

  let formattedWords = items.items[0].Words.split(' ').map(word => word)

  useEffect(() => {
    console.log(chosenLetters)
  }, [hashmap])

  function handleSubmit(chosenLetter: string[]) {
    let submitted = chosenLetter.join('');
    submitted = submitted.toUpperCase();
    if(formattedWords.includes(submitted)){
      console.log('correct');
      setSubmittedAnswers(submitted)
      setHashmap(new Map());
      console.log('stored', submittedAnswers)
    } else {
      console.log('wrong');
      setHashmap(new Map());
    }
  }


  const isBlurred = !started ? "blur-[6px] pointer-events-none" : "";

  return (
    <div 
    className="relative top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 w-[16rem] 
    h-52 flex flex-col justify-between items-center 
    gap-14"
    >
      <div className="">
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: hashmap.get(index) === letter ? chosenLetters.indexOf(letter) * 50 : index * 50,
              top: hashmap.get(index) === letter ? index + 100 : 50,
            }}
            className={`text-4xl uppercase hover:text-yellow-500 cursor-pointer transition-all duration-300 ${isBlurred}`}
            onClick={() => {
              let newHashMap = new Map(hashmap);
              newHashMap.set(index, letter);           
              setHashmap(newHashMap);              
              
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <button
        className={`rounded-lg bg-black focus:scale-95 
        transition-all duration-300 text-white py-2 px-4 text-3xl ${isBlurred}`}
        onClick={() => {
          handleSubmit(chosenLetters);
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Question;