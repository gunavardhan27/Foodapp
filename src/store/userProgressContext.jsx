import { createContext, useState } from "react";

const UserContext = createContext({
    progress : '',
    showModal:()=>{},
    hideModal : ()=>{},
    showCheckout : ()=>{},
    hideCheckout : ()=>{}

})
export function UserProgressContext({children}){
    const [userProgress,setUserProgress] = useState('')
    const userContext = {
        progress : userProgress,
        showModal,
        hideModal,
        showCheckout,
        hideCheckout
    }
    function showModal(){
        setUserProgress('cart')
        }
        function hideModal(){
            setUserProgress('')
        }
        function showCheckout(){
            setUserProgress('checkout')
        }
        function hideCheckout(){
            setUserProgress('')
        }
        
    return (
        <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
    )
}

export default UserContext