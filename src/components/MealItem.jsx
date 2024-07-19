//import { currencyFormatter } from '../util/formatting.js'
import { useContext } from "react"
import CartContext from "../store/CartContext"
import Button from "./UI/Button"
export default function MealItem({mealId,mealData}){
    const cart = useContext(CartContext)
    function addMealToCart(){
        cart.addItem(mealData)
    }
    return (
        <li key={mealId} className="meal-item">
            <article>
                <img src={`http://localhost:3000/${mealData.image}`} alt={mealData.name} />
                <div>
                    <h3>{mealData.name}</h3>
                    <p className='meal-item-description'>{mealData.description}</p>
                    <p className="meal-item-price">${(mealData.price)}</p>
                    <p className="meal-item-actions"><Button onClick={addMealToCart}>Add to Cart</Button></p>
                </div>
            </article>
        </li>
    )
}