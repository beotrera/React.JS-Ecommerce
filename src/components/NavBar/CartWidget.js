import {Link} from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext"
import "./CartWidget.css"

const Icon = ()=>{
    const {total} = useContext(CartContext)

    return(
    <div className="cart-icon">
        <Link className="cart-icon-link" to="/cart">
            <div className="cart-total-item">{total}</div>
            <img className="cart-icon-img" src={process.env.PUBLIC_URL+"/img/shopping-cart.png"} alt="Cart"/>
        </Link>
    </div>
)}

export default Icon;
