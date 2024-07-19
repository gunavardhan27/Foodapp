import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext'
import Button from './UI/Button'
//the textOnly=> highlights only the text in a button
import Cart from './Cart'
export default function Header(){
    const cart = useContext(CartContext)
    
    const totalCartItems = cart.items.reduce((allItemsInCart,item)=>{
        return allItemsInCart + item.quantity
    },0)
    
    return (
        <header id="main-header">
        <div id='title'>
            <img src={logoImg} />
            <h1>REACTFOOD</h1>
        </div>
        <nav>
            <button textOnly>Cart({totalCartItems})</button>
        </nav>
        </header>
    )
}