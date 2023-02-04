import "./Card.css";

const Card = (props) => {
	const classes = `card ${props.className}`;
	return <section className={classes}></section>;
};

export default Card;
