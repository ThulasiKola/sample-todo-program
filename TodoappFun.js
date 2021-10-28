import TodoListFun from "./TodoListFun";

import React,{useState} from 'react';

const TodoappFun = (props) => {
  const [text,setText] = useState('')
  const [items,setItems] = useState([])
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem = {
      text:text,
      id:Date.now()
    }
    setItems(
      items.concat(newItem)
    
  )
  setText('')
  }
  

return(

  <div>
    <h1>TODO</h1>
   <TodoListFun items={items} />
    <form onSubmit = {handleSubmit} >
      <label>what ned to be changed</label><br />
      <input type ="text" value={text} 
      onChange ={(e) => setText(e.target.value)}
      /><br /><br />
      <button>Add#{items.length + 1}</button>
    </form>

  </div>
)
}
export default TodoappFun

