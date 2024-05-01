import React, { useState } from 'react'
import { useTodo } from '../context'


const TodoForm = () => {
  const [todo , setTodo] = useState([])

  const {addTodo} = useTodo()

  const add = (e) =>{ 
    e.preventDefault()
    
    if(!todo) return

    addTodo({todo, completed:false})
    setTodo('')
  }

  return (
    <>
      <form onSubmit={add} className=' my-5'>
      <div className="mb-3 alignForm">
    <div className='alignDiv'>
    <input type="text" placeholder='write todo..' onChange={(e) => setTodo(e.target.value)} value={todo} className="form-control " id="text" aria-describedby="text"/>
    <button className='btn btn-primary mx-3'>Add Todo</button>
    </div>
  </div>
      </form>
    </>
  )
}

export default TodoForm