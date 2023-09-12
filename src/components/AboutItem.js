import Card from "./UI/Card";
import Image from "./UI/Image";
import "./styles/AboutItem.css";
function AboutItem(props) {
  return (
    <Card className="about-item">
      <h2>{props.title}</h2>
      <Image src={props.image} alt={props.title} />
      <p>{props.text}</p>
    </Card>
  );
}
export default AboutItem;
