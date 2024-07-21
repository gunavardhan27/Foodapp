import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import MealItem from "./MealItem";
import Button from "./UI/Button";
import UserContext from "../store/userProgressContext";
import CartItem from "./CartItem";
export default function Cart(){
    const cart = useContext(CartContext)
    const userCtx = useContext(UserContext)
    const totalCost = cart.items.reduce((total,item)=>{
        return total + (item.quantity*item.price)
    },0)
    function handleCloseModal(){
        return userCtx.hideModal()
    }
    function handleOpenCheckout(){
        return userCtx.showCheckout()
    }
    return (
        <Modal open={userCtx.progress==='cart'}>
            <h2>My cart</h2>
            <ul>{cart.items.map((item)=>(
                <CartItem item={item} cartId={item.id} />
            ))}</ul>
            <p>total price ${totalCost}</p>
            <Button textOnly onClick={handleCloseModal}>Close</Button>
            {cart.items.length?<Button onClick={handleOpenCheckout}>Checkout</Button>:''}
        </Modal>
    )
}