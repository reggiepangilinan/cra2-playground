import { useState } from "react";

export const useCounterValue = (initialValue: number) => {
    const [count, setValue] = useState(initialValue);
    return {
        count,
        setValue: (value: number, divideBy : number = 0) => setValue(divideBy > 0 ? value / divideBy : value)
    }
}