import React, { useState } from 'react'

export const Counter = () => {
    const[count , setCount] = useState(0);
    const increment = ()=> {setCount(count+1)};
    const decrement = ()=>{setCount(count-1)}
  return (
    <div className='container'> 
    <div>
        <h1 className='number'>{count}</h1>
    </div>
    <div className='btns-container'>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
    </div>
    </div>
  )
}
