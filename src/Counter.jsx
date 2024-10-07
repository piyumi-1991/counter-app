import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className='incrementButton' onClick={increment}>Increment</button>
            <button className='decrementButton' onClick={decrement}>Decrement</button>
            <button className='resetButton' onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
