import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]); // bütün toDo'ları toplayabilmek için gerekti. 

  const createTodo = (newTodo) => { // yeni toDo oluşturmak ve useState içine eklemek için gerekli fonksiyon.
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }

  return (
    <div>
      <TodoCreate createTodoButChilDestructiring={createTodo} />
      <TodoList todosToChildDestructiring={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
    </div>
  )
}

export default App
