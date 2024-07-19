import { createContext,useReducer} from "react";

const CartContext = createContext({
    items:[],
    addItem : (item)=>{},
    removeItem : (id)=>{}
})
function cartReducer(state,action){
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.find((item)=>item.id === action.item.id)
        //console.log(existingCartItemIndex)
        const updatedItems = [...state.items]
        if (existingCartItemIndex){
            const cartId = state.items.indexOf(existingCartItemIndex)
            const updatedItem = {
                ...state.items[cartId],
                quantity:state.items[cartId].quantity + 1
            }
            updatedItems[cartId] = updatedItem

        }else{
            updatedItems.push({...action.item,quantity:1})
        }
        return {...state,items:updatedItems}
    }
    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findOne((item)=>{item.id === action.id})
        const updatedItems = [...state.items]
        if(existingCartItemIndex>-1){
            if(state.items[existingCartItemIndex].quantity > 1){
                const updatedItem = {
                    ...state.items[existingCartItemIndex],
                    quantity:state.items[existingCartItemIndex].quantity - 1
                }
                updatedItems[existingCartItemIndex] = updatedItem
            }
            else{
                updatedItems.splice(existingCartItemIndex,1)
            }
        }
        return {...state,items:updatedItems}
    }
    return state
}
export function CartContextProvider({children}){
    const [cart,dispatchCartAction] = useReducer(cartReducer,{items:[]})
    // the cartContext used to store the items in the cart and can be passed using the provider to the required functions
    const cartContext = {
        items:cart.items,
        addItem:addItem,
        removeItem:removeItem
    }
    function addItem(item){
        dispatchCartAction({type:'ADD_ITEM',item:item})
    }
    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM',id:id})
    }
    //syntax of useReducer useReducer(reducer_function,the_state),here the reducer_function is cartReducer
    console.log(cartContext,'guna-var')
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}


export default CartContext