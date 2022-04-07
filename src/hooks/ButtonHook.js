import { useState } from 'react';

export const ButtonHook = (firstValue = false) => {
    const [isPush, setIsPush] = useState(firstValue);

    const pushOn = setIsPush(true)
    const pushOff = setIsPush(false)

    return [isPush, pushOn, pushOff]

}
