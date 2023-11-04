// individual service component
import Image from "./UI/Image";
import Card from "./UI/Card";
import './styles/Service.css';
function Service(props) {
    const id = "service-" + props.id;
    return (
        <Card id={id} >           
            <div className="row">
                <h3 className="col-sm">
                    {props.title}
                </h3>
                <div className="col-sm">
                    <Image className="service_image" src={props.image} alt="{props.title} image" />
                </div>
                <div className="col-sm">
                {props.text}
                </div>
            </div>
        </Card>
    );
}
export default Service;