import { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({ state,stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);

  const increase = () =>{
     if(count < stock){
       setCount(count + 1)
     }
  }

  const decrease = () =>{
    if(1 < count){
      setCount(count - 1)
    }
 }

 const handleInputChange = (e) =>{
   e.preventDefault()
 }

    return (
      <div>
        <div className="count-container" style={parseInt(stock)=== 0 ? {display:"none"}:{display:"flex"}}>
          <p>Unidades disponibles:  {stock}</p>
          <div className="count">
            <button className="count-button" id="-" onClick={decrease}>-</button>
            <input  className="count-input" id="cantidad" value={count} onChange={handleInputChange} style={{width:70}}></input>
            <button className="count-button" id="+" onClick={increase}>+</button>
          </div>
          <button className="count-button add" onClick={(e) => onAdd(e, parseInt(document.getElementById("cantidad").value))}>AGREGAR AL CARRITO</button>
        </div>
        <div className="sinStock" style={parseInt(stock) === 0 ? {display:"flex"}:{display:"none"}}>
          <h3>Sin Stock Disponible</h3>
        </div>
      </div>
    )
  }

  export default ItemCount;