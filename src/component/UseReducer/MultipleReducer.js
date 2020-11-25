
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


}
//used when the state transion is 1
//Multiple UseReducers
function MulitpleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count -{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>
            <div>Count2 -{count2}</div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>


            </div>
        </div>
    )
}

export default MulitpleReducer
