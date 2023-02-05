import "./Button.css";

const Button = (props) => {
	const { onClick, text, type } = props;
	const classes = `button ${props.className}`;
	return (
		<button type={type} onClick={onClick} className={classes}>
			{text}
		</button>
	);
};

export default Button;
