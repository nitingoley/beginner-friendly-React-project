import React, { useState } from 'react'
import "./styles.css";
export const Todos = () => {

  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');
  
  const handleSubmit = ()=>{
    if (!input.trim()) return;
     setTodos((prevTodos)=>[
      ...prevTodos,
      {
        text: input,
        id: Date.now()
      }
     ]);
     setInput("");
  };

  const removeTodoHandler = (id)=>setTodos((todos)=> todos.filter((t)=> t.id !== id));
  return ( 
    <div>
    <input type="text"
     placeholder='Text' 
     value={input}
    onChange={(e)=> setInput(e.target.value)}
       />
       <button onClick={handleSubmit}>Submit</button> 

       <ul className="todos-list">
        {todos.map(({text , id})=>(
          <li key={id} className='todo'>
            <span>{text}</span>
            <button onClick={()=> removeTodoHandler(id)}>X</button>
          </li>
        ))}
       </ul>
    </div>
  )
}
