import React from 'react'
import ACTIONS from './ReducerTodo'

function Todo({todo,dispatch}) {
    return (
        <div>
        {todo.name}
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO})}>
                Toggle
            </button>
            <button>
                Delete
            </button>
        </div>
    )
}

export default Todo
