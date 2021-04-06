import React from 'react'
import {useState,useReducer} from 'react'
import Todo from './Todo'

export const ACTIONS={
    ADD_TODO:'add-todo',
    TOGGLE_TODO:'toggle-todo',
    DELETE_TODO:'delete-todo'
}
function reducer(todos,action)
{
    console.log("inside reducer",todos,action)
    switch(action.type){
        case ACTIONS.ADD_TODO:
            console.log("todos sdnaksdnakd",todos)
            return [...todos,{name:action.payload.name,complete:action.payload.complete}]
        case ACTIONS.TOGGLE_TODO:
            console.log("todos aresfdsafdasdasd",todos)
            return todos.map((todo)=>{
                 todo.name="Vijit"
            })
        case ACTIONS.DELETE_TODO:

    }
}

function ReducerTodo() {
    const [name,setName]=useState('');
    const [todos,dispatch]=useReducer(reducer,[])
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log("in handle submit",todos)
        dispatch({type:ACTIONS.ADD_TODO,payload:{name:name,complete:false}})
        console.log("todos",todos);
        setName('');
    }
    console.log("todos outside",todos)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={e=>setName(e.target.value)} value={name}/>{name}
                {todos.map((todo)=>{
                    return (<Todo todo={todo} dispatch={dispatch}></Todo>)
                })}
            </form>
        </div>
    )
}

export default ReducerTodo
