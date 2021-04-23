import CartContext from "./CartContext"
import {useState,useEffect} from "react";

const Cart =({children})=>{
    const [cartItem,setCartItem]=useState([])
    const [total,setTotal]=useState(0)
    const [lastItem,setLastItem]= useState({item:{title:"",price:""}})
    const [popUp,setPopUp]= useState(true)

    useEffect(()=>{
        totalItems()
    },[cartItem]);// eslint-disable-line react-hooks/exhaustive-deps

    const clear=()=>{
        setCartItem([])
        setTotal(0)
    }

    const isInCart=(id)=>{
            var itemCart=cartItem.find(x => x.item.id === id);
            if(itemCart === undefined){
                return false
            }
            else{
                return true
            }
        }

    const  addItem=(dato)=>{
            if(isInCart(dato.item.id)){
                var itemCart=cartItem.find(x => x.item.id === dato.item.id);
                var total = parseInt(itemCart.quantity) + parseInt(dato.quantity)
                parseInt(total) > parseInt(itemCart.item.stock)? itemCart.quantity =  parseInt(itemCart.item.stock):  itemCart.quantity = total
                totalItems()
            }
            else{
                cartItem.push(dato)
                totalItems()
            }
            setLastItem(dato)
            setPopUp(false)
        }

    const pullItem=(id)=>{
        var list= cartItem.filter(x => x.item.id !== id)
        setCartItem(list)
        totalItems()
    }

    const totalPrice=()=>{
        var total = 0
        for(var ind=0;ind < cartItem.length; ind++){
            total =parseInt(cartItem[ind].item.price)*parseInt(cartItem[ind].quantity)+ parseInt(total)
        }
        return total
    }

    const totalItems=()=>{
        var total=0
        for(var ind=0;ind < cartItem.length; ind++){
            total = parseInt(cartItem[ind].quantity) + parseInt(total)
        }
        setTotal(total)
        return 0
    }

    const StockAvailable =(item)=>{
        if(!isInCart(item.id)){
            return  parseInt(item.stock)
        }
        const itemCart= cartItem.find(x=> x.item.id === item.id)
        return item.stock - itemCart.quantity
    }

    const updateQuantity=(id,value)=>{
        const itemCart= cartItem.find(x=> x.item.id === id)
        itemCart.quantity = value;
        totalItems()
    }

    const getQuantity=(id)=>{
        if(cartItem.length !== 0){
            const itemCart= cartItem.find(x=> x.item.id === id)
            return itemCart.quantity
        }
        return 0
    }


    return(
        <CartContext.Provider value={{cartItem,total,lastItem,addItem,clear,pullItem,totalPrice,StockAvailable,updateQuantity,popUp,setPopUp,getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cart