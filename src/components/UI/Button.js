function Button(props) {
    const classes = 'btn ' + props.className;
    return (        
        <button className={classes} type={props.type || 'button'} id={props.id} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
export default Button;