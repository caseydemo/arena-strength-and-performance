import '../styles/Card.css';
function Card(props) {

  const classes = 'container card ' + (props.className ? props.className : '');
  const id = (props.id ? props.id : '');
  return <div className={classes} id={id}>{props.children}</div>;
}
export default Card;