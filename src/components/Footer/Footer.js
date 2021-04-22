import FooterImg from "./FooterImg"
import "./Footer.css"

const Footer = ()=>{
    return(
    <footer>
        <p>COPYRIGHT VENUS EMBROIDERY - 2021. TODOS LOS DERECHOS RESERVADOS.</p>
        <ul className="footer-list">
            {FooterImg.map((x)=>{
                return(
                    <li className="footer-list-item" key={x.alt}>
                        <a className="footer-list-item-link" href={x.link} target="_blank" rel="noreferrer">
                            <img  className="footer-list-item-img" src={process.env.PUBLIC_URL+"/"+x.path} alt={x.alt}/>
                        </a>
                    </li>
                )
            })}
        </ul>
    </footer>
)}

export default Footer;
