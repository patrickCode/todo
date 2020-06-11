import React from 'react';

export const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h2>{value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
    )