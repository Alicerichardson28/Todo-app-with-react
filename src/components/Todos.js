import React from 'react'
import TodoItem from './TodoItem'


const Todos = ({ todos, deleteHandler, updateHandler }) => {
return todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler}/> )
}

export default Todos;