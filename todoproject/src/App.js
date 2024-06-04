import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TodoProvider } from './contexts';

function App() {
const [todos, setTodos] = useState([])

const addTodo = (todo)=>{
setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
}
const updateTodo = (id, todo)=>{
setTodos((prev)=>{
prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo)

}
)
}

const deleteTodo =(id)=>{
  setTodos((prev)=>{
    prev.filter((todo)=> todo.id !== id)
  })
}

const completeTodo=(id)=>{

  setTodos((prev)=>{
    prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)
  })
}

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, completeTodo}} >



    </TodoProvider>
  );
}

export default App;
