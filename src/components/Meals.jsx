import { useState,useEffect } from "react"
import MealItem from "./MealItem"
export default function Meals(){
    const [loadedMeals,setLoadedMeals] = useState([])
    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch('http://localhost:3000/meals',{method:'GET'})  
            if(!response.ok){
                //..
            }
            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    },[])
    //console.log(loadedMeals)
    return (
        <ul id="meals">
            {loadedMeals.map((meal)=>(
            <MealItem mealId={meal.id} mealData={meal} />
            ))}
        </ul>
    )
}