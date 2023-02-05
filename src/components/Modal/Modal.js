import "./Modal.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
	const { onSwitchedVisibility, errorText } = props;

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
				<p className="modal__information">Invalid input</p>
				<div className="modal__bottom">
					<p className="bottom__text">{errorText}</p>
					<Button
						className="button--modal"
						type="button"
						onClick={hideModalHandler}
						text="Okay"
					/>
				</div>
			</Card>
		</div>
	);
};

export default Modal;
