import React,{useState,useEffect} from 'react';
import "../App.css";
import {useSelector} from 'react-redux'
import Task from './Task';
function ListTask() {
  const todos=useSelector((state)=>state.todo.todos)
  const filter=useSelector((state)=>state.todo.filter)

  const [filtredTodos, setFiltredTodos] = useState([])

  useEffect(() => {
    if(filter){
      setFiltredTodos(todos.filter(t => !t.state))
    }else{
      setFiltredTodos(todos)
    }
  }, [filter,todos])
  

  return (
    <div className="listTask">
      {
        filtredTodos.map((todo)=>(
          <Task todo={todo} key={todo.id} />  
        ))
      }
    </div>
  )
}

export default ListTask