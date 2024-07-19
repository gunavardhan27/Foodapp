import { useContext } from "react"
import CartContext from "../store/CartContext"

export default function CartItem({item,cartId}){
    const cart = useContext(CartContext)
    function addItem(){
        return cart.addItem(item)
    }
    function removeItem(){
        return cart.removeItem(item.id)
    }
    return (
        <li key={cartId}>{item.name}
        <button onClick={addItem}>+</button>
        <button>{item.quantity}</button>
        <button onClick={removeItem}>-</button>
        </li>
    )
}