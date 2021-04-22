import {Link} from "react-router-dom";
import "./Item.css"


const Item = (props) =>{
    return(
    <div id="item" className="item">
        <Link to={`/item/${props.item.id}`}>
            <img alt="#" src={process.env.PUBLIC_URL+"/"+props.item.img}/>
        </Link>
        <Link className="item-name" to={`/item/${props.item.id}`}>{props.item.title}</Link>
        <h3>${props.item.price}</h3>
    </div>
)}

export default Item;