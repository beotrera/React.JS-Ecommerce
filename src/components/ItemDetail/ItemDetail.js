import "./ItemDetail.css"
import {Link} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Count from "../Count/ItemCount"
import CartContext from "../../context/CartContext"


const ItemDetail = (props) =>{
    const [stockActual, setStockActual] = useState(0);
    const [sinStcok,setSinSotck]=useState(false)
    const Cart = useContext(CartContext)

    const updateStock = (e, stock) => {
        e.preventDefault();
        Cart.addItem({item:props.item,quantity:stock})
        setStockActual(Cart.StockAvailable(props.item))
    };

    useEffect(()=>{
        setStockActual(Cart.StockAvailable(props.item))
        stockActual === 0 ? setSinSotck(true):setSinSotck(false)
    },[stockActual,props.item,Cart]);

    return(
        <div className="item-detail">
            <Link to="/products" className="back">
                <button className="back-button">
                    <img src={process.env.PUBLIC_URL+"/img/undo.png"} alt="#"/>
                </button>
            </Link>
            <div className="product">
                <div className="product-img">
                    <img src={process.env.PUBLIC_URL+"/"+props.item.img} alt="#"/>
                </div>
                <div className="product-detail">
                    <h3>{props.item.title}</h3>
                    <h4>${props.item.price}</h4>
                    <p>{props.item.description}</p>
                    <Count className={sinStcok?"sinStock":"none"} stock={stockActual} initial={1} onAdd={updateStock} state={sinStcok} />
                </div>
            </div>
        </div>
)};

export default ItemDetail;