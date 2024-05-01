import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoItem = ({todo}) => {
const[isTodoEditable , setTodoEditable] = useState(false)
const [todoMsg , setTodoMsg] = useState(todo.todo)
  
  const {updateTodo,deleteTodo,toggleComplete} = useTodo()
  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <>
      <div className="form-check form-switch col-6 offset-4 col align my-3">
  <input className="form-check-input css1" type="checkbox"  onChange={toggleCompleted} role="switch" id="flexSwitchCheckChecked" />
  <input type="text" readOnly={!isTodoEditable} value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} className="form-control widt mx-3" id="text12" aria-describedby="text12"/>
  <div className="ss">
  <button className={isTodoEditable?' btn btn-light bi bi-check-square mx-3':'btn btn-success bi bi-pencil mx-3'} onClick={() => {
    
    if(todo.completed) return;

    if(isTodoEditable){
      editTodo();
    } else setTodoEditable((prev) => !prev)
    }}
    disabled={todo.completed}
 >  </button>
  <button className='btn btn-danger ' onClick={() => deleteTodo(todo.id)}><i className="bi bi-trash"></i></button>
  </div>
</div>
    </>
  )
}

export default TodoItem