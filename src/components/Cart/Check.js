import { useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import {getFirestore} from "../FireBase/FireBase"
import Loading from "../Loading/Loading"
import "./Check.css"

const Check = () =>{
    const {id}=useParams();
    const [item, setItems] = useState({buyer:{email:"",lastname:"",name:""}});
    const [isLoading,setIsLoading] = useState()

    useEffect(()=>{
        setIsLoading(true)
        const db =getFirestore();
        const itemCollection = db.collection("orders").doc(id);

        itemCollection.get()
        .then((datos)=>{
          if(datos.size === 0){
            console.log("sin datos")
          }
          const order=datos.data()
          setItems(order)
        })
        .catch((error)=>{
          console.log("Error: ",error)
        })
        .finally(()=>{
            setIsLoading(false)
          })
    },[id]);

    return(
        <div>
            <Loading  state={isLoading}/>
            <div className="check-container" style={isLoading? {display:"none"}:{display:"flex"}}>
                <div>
                    <h1>Gracias {item.buyer.lastname},{item.buyer.name} por su compra !</h1>
                    <h3 >Su orden de compra es : <strong>{id}</strong></h3>
                    <p> Se te enviara toda la informacion sobre la compra al email {item.buyer.email}</p>
                </div>
            </div>
        </div>
)};

export default Check;