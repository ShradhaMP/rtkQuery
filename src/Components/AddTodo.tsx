import { FormEvent, useState } from 'react'
import { useAddTodoMutation } from '../features/api/apiSlice';


function AddTodo() {
       const [newTodo,setNewTodo] = useState('')
       const [addTodo] = useAddTodoMutation()

       const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
              e.preventDefault()
              addTodo({userId:1,title:newTodo,completed:false})
              setNewTodo('')
            }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
       <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
       <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
