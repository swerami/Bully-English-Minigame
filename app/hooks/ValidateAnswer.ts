import { create } from "zustand";

interface ValidateAnswerStore {
    currentQuesiton: number,
    setCurrentQuesiton: (value: number) => void

    submittedAnswers: string[]
    setSubmittedAnswers: (answer: string) => void
    resetSubmittedAnswers: () => void

    started: boolean
    setStarted: (value: boolean) => void
}

const ValidateAnswerStore = create<ValidateAnswerStore>((set) => ({
    currentQuesiton: 0,
    setCurrentQuesiton(value: number) {
        set(() => ({
            currentQuesiton: value
        }))
    },

    submittedAnswers: [],
    setSubmittedAnswers: (answer: string) => {
        set((state) => ({
            submittedAnswers: [...state.submittedAnswers, answer]
        }))
    },
    resetSubmittedAnswers: () => {
        set(() => ({
            submittedAnswers: []
        }))
    },

    started: false,
    setStarted: (value: boolean) => {
        set(() => ({
            started: value
        }))
    }
}))

export default ValidateAnswerStore;