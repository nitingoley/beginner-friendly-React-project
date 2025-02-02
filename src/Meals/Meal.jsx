import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles.css";

export const Meal = () => {
const [items , setItems] = useState([]);

useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
        setItems(res.data.meals)
    }).catch((er)=>{
        console.log(er);
    });
},[]);

const itemsList = items.map(({strMeal , strMealThumb, idMeal})=>{
   return(
    <section className='card'>
    <img src={strMealThumb} alt={strMeal} />
    <section className='content'>
        <p>{strMeal}</p>
        <p>${idMeal}</p>
    </section>
</section>
   )
})
  return (
    <div className='items-container'>
        {itemsList}
    </div>
  )
}
