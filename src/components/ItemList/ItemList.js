import Item from "./Item"
import "./ItemList.css"

const ItemList = (props) =>(
    <div id="itemList" className="itemList">
        {props.items.map((x, index) => (
            <Item key={index} item={x} />
      ))}
    </div>
)

export default ItemList