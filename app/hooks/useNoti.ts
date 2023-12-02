import { DumbassSpecial, FailureMessages } from "../utilities/FailureMessages"
import { SuccessMessages } from "../utilities/SuccessMessages"


// Don't repeat yourself babe
const RandomizeNum = (value: string[]) => {
    let random = Math.abs(Math.floor(Math.random() * value.length))
    return random
}

export const useRandomSuccessMessage = (): string => {
    return SuccessMessages[RandomizeNum(SuccessMessages)]
}

export const useRandomFailureMessage = (): string => {
    return FailureMessages[RandomizeNum(FailureMessages)]
}

export const useRoastTFOUTTAUser = (ans: string): string => {
    return DumbassSpecial[RandomizeNum(DumbassSpecial)].replace("REPLACE", ans)
}