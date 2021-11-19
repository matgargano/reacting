function Button(props) {
  return (
    <button onClick={props.onClick} className={'btn btn-' + props.color}>
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  color: 'secondary',
  onClick: () => {
    alert('You have to define an onClick function!');
  },
};

export default Button;
