function Image(props) {
  const className = props.className ? props.className : '';
  return <img src={props.src} alt={props.alt} className={className} />
}
export default Image