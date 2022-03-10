import React, {useReducer} from 'react'

const ACTION_TYPE_INCREMENT = 'increment';
const ACTION_TYPE_DECREMENT = 'decrement';
const ACTION_TYPE_RESET = 'reset';

const initialValue = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE_INCREMENT:
            return state + action.payload;
        case ACTION_TYPE_DECREMENT:
            return state - action.payload;
        case ACTION_TYPE_RESET:
            return 0;
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialValue);
    console.log('useReducer rendering')
    return(
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch({type: ACTION_TYPE_INCREMENT, payload: 1})}>increment</button>
            <button onClick={() => dispatch({type: ACTION_TYPE_DECREMENT, payload: 1})}>decrement</button>
            <button onClick={() => dispatch({type: ACTION_TYPE_RESET, payload: initialValue})}>reset</button>
        </div>
    )

 }