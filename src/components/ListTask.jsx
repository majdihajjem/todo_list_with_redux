import React from 'react';
import "../App.css";
import {useSelector} from 'react-redux'
import Task from './Task';
function ListTask() {
  const todos=useSelector((state)=>state.todo.todos)

  return (
    <div className="listTask">
      {
        todos.map((todo)=>(
          <Task todo={todo} key={todo.id} />  
        ))
      }
    </div>
  )
}

export default ListTask