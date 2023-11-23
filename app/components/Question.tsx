"use client";

import React, { useState } from 'react';

const Question = () => {
  const letters = ["A", "N", "Y", "L", "C", "O"];
  const [hashmap, setHashmap] = useState(new Map());
  const [chosenLetter, setChosenLetter] = useState<string[]>([]);

  return (
    <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[17rem] h-52 flex flex-col justify-between items-center gap-14">
      <div className="bg-green-300">
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: hashmap.get(index) === letter ? chosenLetter.indexOf(letter) * 50 : index * 50,
              top: hashmap.get(index) === letter ? index + 100 : 50,
              transition: "all 0.5s ease",
            }}
            className="text-4xl"
            onClick={() => {
              let newHashMap = new Map(hashmap);
              newHashMap.set(index, letter);
              setChosenLetter([...chosenLetter, letter]);              
              setHashmap(newHashMap);              
              console.log(hashmap);
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <button
        className="rounded-lg bg-black focus:scale-95 
        transition-transform duration-300 text-white py-2 px-4 text-3xl"
        onClick={() => {
          console.log('answer is:', chosenLetter);
          setChosenLetter([]);
          setHashmap(new Map());
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Question;