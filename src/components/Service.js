// individual service component
import Image from "./UI/Image";
import Card from "./UI/Card";
import './styles/Service.css';
function Service(props) {
    const id = "service-" + props.id;
    return (            
        <Card id={id} >
            <div className="row service" >
                <h2 className="service-title">{props.title}</h2>
                <div className="column services__left">
                    <Image src={props.image} alt="{props.title} image"/>
                </div>
                <div className="column services__right">
                    {props.text}
                </div>
            </div>
        </Card>
    );
}
export default Service;