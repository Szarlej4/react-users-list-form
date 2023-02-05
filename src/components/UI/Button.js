import "./Button.css";

const Button = (props) => {
	const { onClick, text, type } = props;
	return (
		<button type={type} onClick={onClick} className="button">
			{text}
		</button>
	);
};

export default Button;
