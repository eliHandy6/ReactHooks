import React, { useReducer } from 'react'

const initialState = 0;
//action is a specification to perform necessaty action
//eg increment ,decrement and reset
const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return initialState;
            break;

        default:
            return state;
            break;
    }
    return newState;

}
function UseReduceCounter() {
    const[count,dispatch]=useReducer(reducer, initialState);

    return (
        <div>
            <div>Count -{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

        </div>
    )
}

export default UseReduceCounter
