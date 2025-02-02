import React, { useState } from 'react'
import "./test.css";

export const AccodionProject = ({title , content}) => {
 const[isActive , setIsActive] = useState();
    return (
    <section className='accordion-card' keu={Math.random()}>
        <div className='header' onClick={()=> setIsActive(!isActive)}>
            <div>{title}</div>
            <p className='icon'>{isActive ? "-" : "+"}</p>
        </div>

        <div className="content">
            {isActive ? <p className='card-info'>{content}</p>: ""}
        </div>

    </section>
  )
}
