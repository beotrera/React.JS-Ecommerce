import ItemList from "./ItemList"
import { useState, useEffect} from "react";
import { useParams, Link} from "react-router-dom";
import {getFirestore} from "../FireBase/FireBase"
import Loading from "../Loading/Loading"
import "./ItemListcontainer.css"

const ItemListContainer = () =>{
      const [items, setItems] = useState([]);
      const [isLoading,setIsLoading] = useState()
      const {id}=useParams();

      useEffect(()=>{
        setIsLoading(true)
        const db=getFirestore();
        const itemCollection = db.collection("items_venus");

        if(id===undefined){
          itemCollection.get()
          .then((datos)=>{
            if(datos.size === 0){
              console.log("sin datos")
            }
            setItems(datos.docs.map(x=>{
              const dato = {id:x.id, ...x.data()}
              return dato
            }))
          })
          .catch((error)=>{
            console.log("Error: ",error)
          })
          .finally(()=>{
            setIsLoading(false)
          })
          }
        else{
          const category = itemCollection.where("category","==",id)
          category.get()
          .then((datos)=>{
            if(datos.size === 0){
              console.log("sin datos")
            }
            setItems(datos.docs.map(x=>{
              const dato = {id:x.id, ...x.data()}
              return dato
            }))
          })
          .catch((error)=>{
            console.log("Error: ",error)
          })
          .finally(()=>{
              setIsLoading(false)
            })
        }
      },[id]);


    return(
    <div>
        <Loading  state={isLoading}/>
        <div className="products-container" style={isLoading? {display:"none"}:{display:"flex"}}>
            <div className="category-container">
                <h3 className="category-container-title">Categorias</h3>
                <ul className="category-container-list">
                    <li className="category-container-item">
                        <Link to="/products">Todos</Link>
                    </li>
                    <li className="category-container-item">
                        <Link to="/category/buzos">Buzos</Link>
                    </li>
                    <li className="category-container-item">
                        <Link to="/category/remeras">Remeras</Link>
                    </li>
                    <li className="category-container-item">
                        <Link to="/category/camperas">Camperas</Link>
                    </li>
                    <li className="category-container-item">
                        <Link to="/category/otros">Otros</Link>
                    </li>
                </ul>
            </div>
            <div className="items-container">
                <ItemList items={items}/>
            </div>
        </div>
    </div>
    )
};

export default ItemListContainer;