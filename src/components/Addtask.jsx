import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {add} from '../features/todo'
import '../App.css';
function Addtask() {
    const dispatch = useDispatch()
    const [description,setDescription]=useState("")
  return (
    <div className="inputdiv">
        <input  className="input" type="text"value={description}  onChange={e=>setDescription(e.target.value)}/>
        <button className="btn" onClick={()=>dispatch(add(description))}>Add</button>
    </div>
  )
}

export default Addtask