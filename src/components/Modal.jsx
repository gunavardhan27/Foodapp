import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
//import CartContext from "../store/CartContext";


export default function Modal({children,open}){
    //const cart = useContext(CartContext)
    const modal = useRef()
    useEffect(()=>{
        if(open){
            modal.current.showModal()
        }
        return ()=>modal.current.close()
    },[open])
    return createPortal(<dialog ref={modal} className="modal">{children}</dialog>,document.getElementById('modal'))
}