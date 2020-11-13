import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, deleteHandler }) => {
    return(
        <div className="todoItem">
            <h1>{todo.message}</h1>
            <div>

                <button onClick={() => deleteHandler(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default TodoItem