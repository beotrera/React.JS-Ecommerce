import {Link} from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import Count from "../Count/ItemCountCart"
import CartContext from "../../context/CartContext"
import "./Cart.css"



function Cart() {
    const Cart = useContext(CartContext)
    const [list,setList]=useState([])
    const [isEmty,setIsEmty]=useState(true)

    useEffect(()=>{
        setList(Cart.cartItem);
        Cart.cartItem.length === 0?setIsEmty(true):setIsEmty(false);
    },[Cart.cartItem]);

  return (
    <div className="cart-container">
        <ul className="cart-list">
        <div className="cart-header">
            <span><strong>Bolsa de Compras  </strong></span>
            <span style={isEmty?{display:"none"}:{display:"inline-block"}}>( {Cart.total}  productos)</span>
            <div style={isEmty?{display:"block"}:{display:"none"}}>
                <span>Tu Bolsa de Compras está vacía. Agrega productos ahora{">>"}</span>
                <Link to="/products">
                    <span>seguí navegando</span>
                </Link>
            </div>
        </div>
        {list.map((x)=>{
            return(
                <li className="cart-list-item">
                    <img alt="#" src={x.item.img} className="cart-list-item-img"/>
                    <p className="cart-list-item-titl"><strong>{x.item.title}</strong></p>
                    <p className="cart-list-item-price">$  <strong>{x.item.price}</strong></p>
                    <Count id={x.item.id} stock={x.item.stock}/>
                    <button className="delete-button" onClick={e=>Cart.pullItem(x.item.id)}>
                        <img  src={"img/trash.png"} alt="#"/>
                    </button>
                </li>
            )
        })}
        <li className="payment">
            <span><strong>Opciones de pago</strong></span>
            <span>Aceptamos los siguientes métodos de pago:</span>
            <img  src={"img/card-visa.png"} alt="#"/>
            <img  src={"img/card-mastercard.png"} alt="#"/>
            <img  src={"img/card-amex.png"} alt="#"/>
            <img  src={"img/mercadopago.png"} alt="#"/>
            <p className="payment-pull" onClick={e=>Cart.clear()}>Vaciar carro</p>
        </li>
        <li className="checkout" style={isEmty?{display:"none"}:{display:"list-item"}}>
            <span className="checkout-title"><strong>Sub-Total: $ {Cart.totalPrice()}</strong></span>
            <Link to="/checkout" className="checkout-link">
                <div className="checkout-button">
                    <div className="checkout-button-img">
                        <img  src={"img/Checkout-Basket-icon.png"} alt="#"/>
                    </div>
                    <div className="checkout-button-text">
                        <p>Continuar con la compra</p>
                    </div>
                </div>
            </Link>
        </li>
        </ul>
    </div>
  );
}

export default Cart;
