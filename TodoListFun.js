import React from 'react'
function TodoListFun(props) {
    return(
      <div>
        <ul>
          {props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      
    )
  }
  export default TodoListFun