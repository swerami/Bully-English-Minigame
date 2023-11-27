import { create } from "zustand";

interface ValidateAnswerStore {
    submittedAnswers: string[],
    setSubmittedAnswers: (answer: string) => void
}

const ValidateAnswerStore = create<ValidateAnswerStore>((set) => ({
    submittedAnswers: [],
    setSubmittedAnswers: (answer) => {
        set((state) => ({
            submittedAnswers: [...state.submittedAnswers, answer]
        }))
    }
}))

export default ValidateAnswerStore;