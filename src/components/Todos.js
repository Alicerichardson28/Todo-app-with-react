import React from 'react'


function Todos({todos}) {
    return(
        todos.map((todo) => (
            <div> <h1>{todo.message}</h1></div>
        ))
    )
}

export default Todos;