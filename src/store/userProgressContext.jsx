import { createContext, useState, useSyncExternalStore } from "react";

const UserContext = createContext({
    progress : '',
    showModal:()=>{},
    hideModal : ()=>{},
    showCheckout : ()=>{},
    hideCheckout : ()=>{}

})
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
export function UserProgressContext(){
    const [userProgress,setUserProgress] = useState('')
    const userContext = {
        progress : userProgress,
        showModal,
        hideModal,
        showCheckout,
        hideCheckout
    }
    return (
        <UserContext.Provider value={userContext}></UserContext.Provider>
    )
}

export default UserContext