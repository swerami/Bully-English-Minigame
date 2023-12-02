import { create } from "zustand";

interface ValidateAnswerStore {
    currentQuesiton: number,
    setCurrentQuesiton: (value: number) => void

    submittedAnswers: string[]
    setSubmittedAnswers: (answer: string) => void
    resetSubmittedAnswers: () => void

    started: boolean
    setStarted: (value: boolean) => void

    progress: number
    setProgress: (value: number) => void
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
    },

    progress: 0,
    setProgress: (value: number)=> {
        set(() => ({
            progress: value
        }))
    },


}))

export default ValidateAnswerStore;