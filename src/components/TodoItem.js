import React, { useState }from 'react'
import './TodoItem.css'

function TodoItem ({ todo, deleteHandler, updateHandler }) {

    const [isEditing, setIsEditing] = useState(false)
    const [updatedTodo, setUpdateTodo] = useState()

    const updateTodoState = e => {
        //update the state with the value entered in the input
        setUpdateTodo({
            id: todo.id,
            message: e.target.value
        })
    }

    const updateAndReset = (input, e) => {
        e.preventDefault();
        //call updateHandler with the input
        updateHandler(input)
        setIsEditing(false)
    }

    return(
        <div className="todoItem">
            {isEditing ? 
                <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                    <input 
                        type="text"
                        defaultValue={todo.message}
                        onChange={updateTodoState}
                    /> 
                </form>
                : 
                <p onDoubleClick={() => setIsEditing(true)}><h1>{todo.message}</h1></p>
            }
            <button onClick={() => deleteHandler(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem