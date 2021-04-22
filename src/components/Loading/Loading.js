import "./Loading.css"
import {useState, useEffect} from "react";

const Loading = ({state}) =>{
    const [active,setActive] = useState("state")

    useEffect(()=>{
        setActive(state)
    },[state]);


return(
    <div style={active? {display:"block"}:{display:"none"}}>
        <div className="spinner-container">
            <img src={process.env.PUBLIC_URL+"/img/Spinner.svg"} alt="Loading..." />
        </div>
    </div>
)}

export default Loading