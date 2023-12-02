import { DumbassSpecial, FailureMessages, SuccessMessages } from "./messages"

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

export const roastTFOUTTAUser = (ans: string): string => {
    return DumbassSpecial[RandomizeNum(DumbassSpecial)].replace("REPLACE", ans)
}