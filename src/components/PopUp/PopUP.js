import React, { useContext,useEffect} from 'react';
import CartContext from "../../context/CartContext"
import "./PopUp.css"
import  {Link} from "react-router-dom"


function PopUp() {
  const Cart = useContext(CartContext)

  useEffect(()=>{},[Cart.popUp]);

  return (
    <div>
      <div className={Cart.popUp ? 'backdrop':'backdrop openPop'} onClick={(e)=>Cart.setPopUp(true)}></div>
      <div className={Cart.popUp ? "PopUp":"PopUp openPop"}>
          <div className='PopUp-data'>
              <div className="PopUp-close">
                <button onClick={(e)=>Cart.setPopUp(true)}>
                    <span>X</span>
                </button>
              </div>
              <div className="PopUp-title"><h4>Producto(s) agregado(s) a la bolsa de compras</h4></div>
              <div className="PopUp-item-data">
                <img alt="#" src={process.env.PUBLIC_URL+"/"+Cart.lastItem.item.img} className="cart-list-item-img"/>
                <p className="cart-list-item-titl"><strong>{Cart.lastItem.item.title}</strong></p>
                <p className="cart-list-item-price">$  <strong>{Cart.lastItem.item.price}</strong></p>
              </div>
              <div className="PopUp-item-nav">
                  <Link to="/products" onClick={(e)=>Cart.setPopUp(true)}>Segui comprando</Link>
                  <Link to="/cart" className="PopUp-item-nav-button" onClick={(e)=>Cart.setPopUp(true)}>
                      <p>Continuar con la compra</p>
                </Link>
              </div>
          </div>
      </div>
    </div>
  );
}

export default PopUp;
