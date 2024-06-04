import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm () {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()
    const add = (e) =>{
        e.preventDefault()
        
    }
  return (
    <div className='flex'>
    <form onSubmit={add}>
<input
type='text'
value={todo}
onChange={(e)=>setTodo(e.target.value) }
placeholder='add todo'
/>

<button>Add Todo this is my info</button>
    </form>
    </div>
  )
}

export default TodoForm