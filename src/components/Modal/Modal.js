import "./Modal.css";
import Button from "../UI/Button";

const Modal = (props) => {
	const { onButtonClicked } = props;
	return (
		<div className="modal">
			<Button type="button" onClick={onButtonClicked} text="Hide Me" />
		</div>
	);
};

export default Modal;
