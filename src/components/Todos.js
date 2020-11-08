import React from 'react'
import TodoItem from './TodoItem'



// function Todos({todos}) {
//     return(
//         todos.map((todo) => (
//             <div> <h1>{todo.message}</h1></div>
//         ))
//     )
// }

const Todos = ({ todos }) => {
return todos.map((todo) => <TodoItem key={todo.id} todo={todo} /> )
}

export default Todos;