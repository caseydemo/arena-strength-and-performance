// individual service component
import Image from "./UI/Image";
import Card from "./UI/Card";
import './styles/Service.css';
function Service(props) {
    const id = "service-" + props.id;
    const alt = props.title + " image";
    return (
        <Card id={id} className="service-card" >           
            <div className="row service_wrapper">                
                <div className="col-sm service-title">
                    <h2>
                    {props.title}
                    </h2>
                </div>
                <div className="col-sm">
                    <Image className="service_image" src={props.image} alt={alt} />
                </div>
                <div className="col-sm">
                {props.text}
                </div>
            </div>
        </Card>
    );
}
export default Service;