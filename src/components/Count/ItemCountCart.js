import { useState,useContext,useEffect } from "react";
import "./ItemCount.css"
import CartContext from "../../context/CartContext"


const ItemCount = ({id,stock}) => {

  const {updateQuantity,getQuantity,total,pullItem} = useContext(CartContext)
  const [count, setCount] = useState(0);
  const [topItem,setTopItem] = useState(false)

  useEffect(()=>{
    setCount(getQuantity(id))
},[total,id]); // eslint-disable-line react-hooks/exhaustive-deps

  const decrease = () =>{
    if(count - 1 === 0){
      pullItem(id)
    }
    else{
      updateQuantity(id,parseInt(count)-1)
      setTopItem(false)

    }
  }

  const increase = () =>{
    if(count + 1 === parseInt(stock)){
      setTopItem(true)
      updateQuantity(id,parseInt(count)+1)
    }
    else{
      updateQuantity(id,parseInt(count)+1)
    }
 }

 const handleInputChange = (e) =>{
   e.preventDefault()
 }

    return (
      <div>
          <div className="count">
            <button className="count-button" id="-" onClick={decrease}>-</button>
            <input  className="count-input" id="cantidad" value={count} onChange={handleInputChange} style={{backgroundColor:"white",width:30}}></input>
            <button className="count-button" id="+" onClick={increase} disabled={topItem}>+</button>
          </div>
      </div>
    )
  }

  export default ItemCount;