import React, {useState} from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        console.log("+1");
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        console.log("-1");
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}