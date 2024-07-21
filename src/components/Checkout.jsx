import { useContext } from "react"
import CartContext from "../store/CartContext"
import UserContext from "../store/userProgressContext"
import Modal from "./Modal"

export default function Checkout(){
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserContext)
    console.log(cartCtx.items)
    function handleClose(){
        //progress.hideModal()
        return userCtx.hideCheckout()
    }
    function handleSubmit(event){
        event.preventDefault()
        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        const response  = fetch('http://localhost:3000/orders',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              order:{
              items:cartCtx.items,
              customer:data
            }})
    })
    if(response.ok){
        console.log(data)
    }
    }
    return (
        <Modal open={userCtx.progress==='checkout'}>
            <form onSubmit={handleSubmit}>
              <div className="control">
               <label htmlFor="mail">Email</label>
                <input id="email" type="email" name="mail" required />
              </div>
              <div className="control">
                <label htmlFor="name">name</label>
                <input id="name" type="text" name="name" required />
             </div>
             <div className="control">
               <label htmlFor="street">Street</label>
              <input id="street" type="text" name="street" required />
             </div>
             <div className="control">
              <label htmlFor="postal-code">Postal</label>
              <input id="postal-code" type="text" name="postal-code" required />
            </div>
            <div className="control">
              <label htmlFor="city">city</label>
              <input id="city" type="text" name="city" required />
            </div>
            <input type="submit"/>
            </form>
        </Modal>
    )
}