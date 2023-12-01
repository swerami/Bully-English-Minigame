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
        py-2
        px-4
        "
        >
        <option value={0}>English 1</option>
        <option value={1}>English 2</option>
        <option value={2}>English 3</option>
        <option value={3}>English 4</option>
        <option value={4}>English 5</option>
    </select>;
};

export default SelectQuestion;
