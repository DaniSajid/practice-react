import { useEffect, useState } from 'react'
import { TodoProvider } from '../context'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


function TodoApp() {
const [todos , setTodos] = useState([]) 
const addTodo =(todo) =>{
  setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])
}
const updateTodo =(id,todo) =>{
setTodos((prev)=> prev.map((prevTodo) =>(prevTodo.id
  === prev.id ? todo : prevTodo
))) 
}

const deleteTodo =  (id) =>{
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}
const toggleComplete = (id) => {
 setTodos((prev) => prev.map((prevTodo) => prevTodo === id
? {...prev , completed: !prevTodo.completed}  :prevTodo ))
} 
useEffect(() => {
 let parseTodos = JSON.parse(localStorage.getItem("todos"))

 if(parseTodos && parseTodos.length > 0){
   setTodos(parseTodos)
 }
}, [])

useEffect(() => {
 localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])


  return (
     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className='container'>
     <h3 className='my-5 text-center'>Todo Application</h3>
   <TodoForm/>

     {todos.map((todo) =>(
      
       <div key={todo.id}>

         <TodoItem todo={todo}/>
       </div>
    
     ))}
     </div>
     </TodoProvider>
  )
}

export default TodoApp
