import React, { SelectHTMLAttributes, useRef } from "react";
import ValidateAnswerStore from "../hooks/ValidateAnswer";

const SelectQuestion = () => {
    const {
        setCurrentQuesiton,  
        setStarted,
        resetSubmittedAnswers
    } = ValidateAnswerStore()    

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStarted(false)

        let value  = event.target.value
        resetSubmittedAnswers()
        setCurrentQuesiton(Number(value))
    }

    return <select 
        onChange={handleOnChange}
        defaultValue={0}
        className="
        bg-transparent
        border
        border-black/5
        rounded-lg
        z-50
        py-2
        px-4
        "
        >
        {Array.from({length: 5}).map((_, i) => (
            <option value={i}>English {i+1}</option>
        ))}
    </select>;
};

export default SelectQuestion;
