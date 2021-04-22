import "./Contact.css"

const Contact = () =>{

return (
    <div className="contact-container">
        <div className="data-container">
            <p className="data-container-text">¡Envianos un DM en Instagram y respondemos todas tus dudas a la brevedad!</p>
            <ul className="data-container-list-left">
                <li>
                    <img src={process.env.PUBLIC_URL+"/img/tik-tok.png"} alt="Tik-Tok"/>
                    <a className="footer-list-item-link" href="https://www.instagram.com/venus.embroidery" target="_blank" rel="noreferrer">Seguinos en TikTok</a>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL+"/img/gorjeo.png"} alt="Twitter"/>
                    <a className="footer-list-item-link" href="https://www.instagram.com/venus.embroidery" target="_blank" rel="noreferrer">Seguinos en Twitter</a>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL+"/img/logotipo-de-instagram.png"} alt="Instagram"/>
                    <a className="footer-list-item-link" href="https://www.instagram.com/venus.embroidery" target="_blank" rel="noreferrer">Seguinos en Instagram</a>
                </li>
            </ul>
            <ul className="data-container-list-right">
                <li>
                    <img src={process.env.PUBLIC_URL+"/img/mensaje.png"} alt="Mensaje"/>
                    <a href="mailto:test@test.com">test@test.com</a>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL+"/img/marcador-de-posicion.png"} alt="Posicion"/>
                    <p>Calle Falsa 123 - Capital Federal - CABA</p>
                </li>
            </ul>
        </div>
        <div className="form-container">
            <form className="form">
                <div>
                    <label>Nombre</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Mensaje</label>
                    <textarea name="message" cols="20" rows="5"></textarea>
                </div>
            </form>
            <input className="input-enviar" type="submit" value="Enviar"></input>
        </div>
    </div>
)
}
export default Contact