import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import MealItem from "./MealItem";
import Button from "./UI/Button";

export default function Cart(){
    const cart = useContext(CartContext)
    const totalCost = cart.items.reduce((total,item)=>{
        return total + (item.quantity*item.price)
    },0)
    return (
        <Modal>
            <h2>My cart</h2>
            <ul>{cart.items.map((item,key)=>{
                <li key={key}>{item.name}-{item.id}</li>
            })}</ul>
            <p>total price ${totalCost}</p>
            <Button textOnly>Close</Button>
            <Button>Checkout</Button>
        </Modal>
    )
}