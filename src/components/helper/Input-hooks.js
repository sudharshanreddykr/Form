import {useState} from 'react';

export const useInput = (iniVal) => {
    const [value, setValue] = useState(iniVal);
    return {value, setValue, reset:() => setValue(""), 
    bind: {
        value, onChange: (e) => {
            setValue(e.target.value)
        }
    }
}
}


