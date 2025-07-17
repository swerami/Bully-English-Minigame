import { FailureMessages, PoliteSpecial, SuccessMessages } from "./messages"

const RandomizeNum = (value: string[]) => {
    let random = Math.abs(Math.floor(Math.random() * value.length))
    return random
}

export const randomSuccessMessage = (): string => {
    return SuccessMessages[RandomizeNum(SuccessMessages)]
}

export const randomFailureMessage = (): string => {
    return FailureMessages[RandomizeNum(FailureMessages)]
}

export const roastUser = (ans: string): string => {
    return PoliteSpecial[RandomizeNum(PoliteSpecial)].replace("REPLACE", ans)
}