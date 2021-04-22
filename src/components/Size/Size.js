import "./Size.css"
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'

const Size = () =>{

    return(
        <div className="size-container">
            <img src={process.env.PUBLIC_URL+"/img/size.png"} alt="talles"/>
            <AdditionalInfo />
        </div>
)};

export default Size;