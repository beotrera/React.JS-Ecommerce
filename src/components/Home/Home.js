import Slider from "../slider/Slider"
import "./Home.css"
import {Link} from "react-router-dom";

const Home = ()=>{
    return(
    <div>
        <Slider/>
        <div className="shop-container">
            <Link to="/products" className="shop-link">
                <h2>SHOP NOW</h2>
            </Link>
        </div>
        <div className="information">
            <div className="information-item">
                <img src={process.env.PUBLIC_URL+"/img/shipped.png"} alt="Truck"/>
                <h2>Envio a todo el pais!</h2>
            </div>
            <div className="information-item">
                <img src={process.env.PUBLIC_URL+"/img/credit-card.png"} alt="Credid Card"/>
                <h2>3 y 6 cuotas sin interes!</h2>
            </div>
            <div className="information-item">
                <img src={process.env.PUBLIC_URL+"/img/verified.png"} alt="Security"/>
                <h2>Compra 100% segura</h2>
             </div>

        </div>
    </div>
)}

export default Home;
