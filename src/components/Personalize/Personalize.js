import "./Personalize.css"
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'


const Personalize = () =>{

    return(
        <div className="personalize-container">
            <div className="personalize-text-container">
                <h3>Si querés uno de nuestros productos personalizado con alguna imagen/frase/logo en especifico, escribinos por privado a nuestra cuenta de <a href="https://www.instagram.com/venus.embroidery">Instagram</a> o envianos un <a href="mailto:test@test.com">E-Mail</a> para poder asesorarte.</h3>
                <br/>
                <h3>El costo del personalizado es el mismo que las prendas que tenemos publicadas tanto para los estampados como para los bordados. Solamente varía si la prenda lleva 2 o más estampas.</h3>
            </div>
            <AdditionalInfo />
        </div>
)};

export default Personalize;