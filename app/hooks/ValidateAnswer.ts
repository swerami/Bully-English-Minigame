import { create } from "zustand";

interface ValidateAnswerStore {
    submittedAnswers: string[],
    setSubmittedAnswers: (answer: string) => void

    started: boolean
    setStarted: () => void
}

const ValidateAnswerStore = create<ValidateAnswerStore>((set) => ({
    submittedAnswers: [],
    setSubmittedAnswers: (answer) => {
        set((state) => ({
            submittedAnswers: [...state.submittedAnswers, answer]
        }))
    },
    started: false,
    setStarted: () => {
        set(() => ({
            started: true
        }))
    }
}))

export default ValidateAnswerStore;