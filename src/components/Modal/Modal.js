import "./Modal.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
	const { onSwitchedVisibility } = props;

	const hideModalHandler = (e) => {
		if (
			e.target.classList.contains("button") ||
			e.target.classList.contains("overlay")
		) {
			onSwitchedVisibility();
		}
	};

	return (
		<div onClick={hideModalHandler} className="overlay">
			<Card className="overlay__modal">
				<p className="modal__text">something is wrong</p>
				<Button
					className="button--modal"
					type="button"
					onClick={hideModalHandler}
					text="Hide Me"
				/>
			</Card>
		</div>
	);
};

export default Modal;
