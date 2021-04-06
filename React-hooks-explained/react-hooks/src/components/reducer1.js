import React from 'react'
import {useState,useReducer} from 'react'

function reducer(state,action)
{
    switch(action.type)
    {
        case 'increment':
            return {count : state.count+action.amount}
        case 'reset':
            return {count : action.amount}
    }
}

function Reducer1() {
    //const [count, setCount] = useState(0)  //No need to use useState when we are using useReducer.
    const [state,dispatch] = useReducer(reducer,{count:0})

    function increment(amount) {
      dispatch({type:'increment',amount:amount})
    }
  
    function resetCount() {
      dispatch({type:'reset',amount:0})
    }
    return (
        <div>
            <span>{state.count}</span>
            <button onClick={() => increment(1)}>+</button>
            <button onClick={() => increment(-1)}>-</button>
            <button onClick={() => resetCount()}>Reset</button>
        </div>
    )
}

export default Reducer1
