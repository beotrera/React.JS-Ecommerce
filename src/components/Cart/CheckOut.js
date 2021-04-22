import CartContext from "../../context/CartContext"
import {getFirestore, getDate} from "../FireBase/FireBase"
import { useContext, useState} from "react";
import "./CheckOut.css"
import  {Redirect} from "react-router-dom"

const CheckOut =()=>{
    const [orderId,setorderId]=useState("")
    const [redirect,setRedirect]=useState(false)
    const Cart = useContext(CartContext)
    const db=getFirestore();
    const Collection = db.collection("orders");

    const newOrder = {
        buyer:{name:"",lastname:"",phone:"",email:""},
        items:Cart.cartItem,
        date:getDate(),
        total:Cart.totalPrice()
    }

    const  CreateOrder =()=>{
        Collection.add(newOrder)
        .then(({id})=> setorderId(id))
        .catch((error)=> console.log(error))
        .finally(()=>{
            setRedirect(true)
        })
        Cart.clear()
    }

    const ChangeName=(e)=>{
        e.preventDefault();
        newOrder.buyer.name = e.target.value
    }
    const ChangeLastName=(e)=>{
        e.preventDefault();
        newOrder.buyer.lastname = e.target.value
    }
    const ChangePhone=(e)=>{
        e.preventDefault();
        newOrder.buyer.phone = e.target.value
    }
    const ChangeEmail=(e)=>{
        e.preventDefault();
        newOrder.buyer.email = e.target.value
    }


    return(
    <div className="row row-container">
        <div className="col-75">
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-50">
                            <h3>Datos</h3>
                            <label>Nombre</label>
                            <input type="text" onChange={ChangeName}></input>
                            <label>Apellido</label>
                            <input type="text" onChange={ChangeLastName}></input>
                            <label>Email</label>
                            <input type="text" onChange={ChangeEmail}></input>
                            <label>Telefono</label>
                            <input type="text" onChange={ChangePhone}></input>
                        </div>
                        <div className="col-50">
                            <h3>Pago</h3>
                            <label>Nombre de tarjeta</label>
                            <input type="text"></input>
                            <label>Numero de tarjeta</label>
                            <input type="text"></input>
                            <label>MM/AA</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select> / <input type="text" className="anio"></input>
                            <label>CVV</label>
                            <input type="text"></input>
                            <label>Tarjetas aceptadas</label>
                            <div className="icon-container">
                                <img  src={"img/card-visa.png"} alt="#"/>
                                <img  src={"img/card-mastercard.png"} alt="#"/>
                                <img  src={"img/card-amex.png"} alt="#"/>
                            </div>
                        </div>
                    </div>
                    <button className="btn"  onClick={e=>CreateOrder()}>Finalizar compra</button>
                    {redirect && <Redirect to={`check/${orderId}`}/>}
                </div>
            </div>
        </div>
        <div className="col-25">
            <div className="container">
                {Cart.cartItem.map((x)=>{
                    return(
                    <p>{x.item.title}<span className="price">${x.item.price}</span></p>)
                })}
                <hr className="total-line"/>
                <p>Total <span className="price"><b>${Cart.totalPrice()}</b></span></p>
            </div>
        </div>
    </div>
)}



export default CheckOut