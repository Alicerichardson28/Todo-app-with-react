import React from 'react'
import TodoItem from './TodoItem'


const Todos = ({ todos, deleteHandler }) => {
return todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler}/> )
}

export default Todos;