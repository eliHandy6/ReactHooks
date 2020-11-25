import React, { useReducer } from 'react'

//componet states and actions are objects
const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
//action is a specification to perform necessaty action
//eg increment ,decrement and reset
const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.value };
            break;
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - + action.value };
            break;
        case 'increment2':
            return { ...state,secondCountereco: state.secondCounter + action.value };
            break;
        case 'decrement2':
            return { ...state,secondCounter: state.secondCounter - + action.value };
            break;
        case 'reset':
            return initialState;
            break;

        default:
            return state;
            break;
    }


}
function UseReducerObject() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count -{count.firstCounter}</div>
            <div>Counter 2 -{count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>

            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default UseReducerObject
