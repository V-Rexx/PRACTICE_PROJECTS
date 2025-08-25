import { useState } from "react";


export default function Counter(){

    const [count, setCount] = useState(0);

    const addVal = () => {
        return setCount(count+1)
    }

    const subVal = () => {
        return count > 0 && setCount(count - 1);
    }

    return(
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={addVal}>+1</button>
            <button onClick={subVal}>-1</button>
        </div>
    );

}