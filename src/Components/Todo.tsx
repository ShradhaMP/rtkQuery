import { useGetTodosQuery,useDeleteTodoMutation,useUpdateTodoMutation } from "../features/api/apiSlice";

function Todo() {
  const { data, isLoading, isError,isSuccess} = useGetTodosQuery("");

  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

 
  let content;
  if(isLoading){
    content = <p>Loading....</p>
  }
  else if(isSuccess){
    content = data.map(todo=>{
      return (
        <div style={{display:"flex"}} key={todo.id}>
         <input
                type="checkbox"
                name=""
                checked={todo.completed}  
                key={todo.id}
                onChange={()=>updateTodo({...todo,completed:!todo.completed})}             
              />
              <label style={{ marginRight: 10, marginTop: 5 }}>{todo.title}</label>
              <button
                style={{ marginTop: 5 }}
                onClick={()=>deleteTodo({id:todo.id})}
              >
                Delete
              </button>
              
        </div>
      )
    }
     
      )
  }
  else if(isError){
    content=<p>Error</p>
  }


  return (
    <>
      {content}
    </>
  );
}

export default Todo;
