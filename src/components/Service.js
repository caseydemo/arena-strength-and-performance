// individual service component
import Image from "./UI/Image";
import Card from "./UI/Card";
import './styles/Service.css';
function Service(props) {
    const id = "service-" + props.id;
    return (
        <Card id={id} className="service-card" >
            <div className="row service_wrapper">
                
                {/* title/description */}
                <div className="col-sm service-text-wrapper">
                    <h2 className="service-title" >
                        {props.title}
                    </h2>
                    <p className="service-description">
                        {props.text}
                    </p>
                </div>                
                
                {/* image */}
                <div className="col-sm">
                    <Image className="service_image" src={props.image} alt="{props.title} image" />
                </div>


            </div>
        </Card>
    );
}
export default Service;