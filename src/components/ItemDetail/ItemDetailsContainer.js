import ItemDetail from "./ItemDetail"
import { useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import {getFirestore} from "../FireBase/FireBase"
import Loading from "../Loading/Loading"
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'

const ItemDetailContainer = () =>{
    const {id}=useParams();
    const [item, setItems] = useState([]);
    const [isLoading,setIsLoading] = useState()

    useEffect(()=>{
        setIsLoading(true)
        const db =getFirestore();
        const itemCollection = db.collection("items_venus").doc(id);

        itemCollection.get()
        .then((datos)=>{
          if(datos.size === 0){
            console.log("sin datos")
          }
          const item={id:datos.id,...datos.data()}
          setItems(item)
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
            <div style={isLoading? {display:"none"}:{display:"block"}}>
                <ItemDetail item={item}/>
                <AdditionalInfo />
            </div>
        </div>

)};

export default ItemDetailContainer;