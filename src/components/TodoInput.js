import React, {useRef} from 'react'

function TodoInput({createTodo}) {
    const todoInput = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();

        createTodo(todoInput.current.value)
        // e.target.value = '';
        todoInput.current.value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInput} required />
            <input type="submit"></input>
        </form>
    )
}


export default TodoInput;