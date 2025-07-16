import {useState} from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(prevState => prevState + 1)
    const decrement = () => setCounter(prevState => prevState - 1)

    return {
        counter,
        increment,
        decrement,
    }
}

export default useCounter;