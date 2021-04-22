import "./AdditionalInfo.css"

const AdditionalInfo = () =>{

    return(
        <div className="info-container">
            <div className="info-item left">
                <img src={process.env.PUBLIC_URL+"/img/reciclar.png"} alt="#"/>
                <div>
                    <h4>LAS PRENDAS NO TIENEN CAMBIO</h4>
                    <p>Los productos que se realizan a pedido no poseen cambio por lo tanto consulta por la tabla de talles.</p>
                </div>
            </div>
            <div className="info-item left">
                <img src={process.env.PUBLIC_URL+"/img/clean.png"} alt="#"/>
                <div>
                    <h4>CUIDÁ TU PRENDA</h4>
                    <p>Lava con agua fría y del revés para conservar por más tiempo la calidad de las telas.</p>
                </div>
            </div>
            <div className="info-item right">
                <img src={process.env.PUBLIC_URL+"/img/shipped.png"} alt="#"/>
                <div>
                    <h4>PRODUCCIÓN Y DESPACHO</h4>
                    <p>Los tiempos de producción y despacho de los pedidos son de aproximadamente 7 a 10 días hábiles.</p>
                </div>
            </div>
        </div>
)};

export default AdditionalInfo;