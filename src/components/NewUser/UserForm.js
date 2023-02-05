import { useState } from "react";
import "./UserForm.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import User from "../../classes/User";

const UserForm = (props) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [isModalHidden, setIsModalHidden] = useState(true);

	const switchIsModalHidden = () => {
		isModalHidden ? setIsModalHidden(false) : setIsModalHidden(true);
	};

	const onNameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const onAgeChangeHandler = (e) => {
		setAge(e.target.value);
	};

	const clickHandler = (e) => {
		e.preventDefault();
		if (name && age) {
			props.onAddNewUser(new User(name, age));
			setName("");
			setAge("");
			return;
		}
		switchIsModalHidden();
	};

	return (
		<form action="" className="user-form">
			<div className="user-form__input-wrapper">
				<label htmlFor="" className="input-wraper__label">
					Name
				</label>
				<input
					value={name}
					onChange={onNameChangeHandler}
					type="text"
					className="input-wrapper__input"
				/>
			</div>
			<div className="user-form__input-wrapper">
				<label htmlFor="" className="input-wraper__label">
					Age (years)
				</label>
				<input
					value={age}
					onChange={onAgeChangeHandler}
					type="number"
					min="1"
					max="150"
					step="1"
					className="input-wrapper__input"
				/>
			</div>
			<Button
				className="button--user_form"
				type="submit"
				onClick={clickHandler}
				text="Add new user"
			/>
			{!isModalHidden && (
				<Modal onSwitchedVisibility={switchIsModalHidden} />
			)}
		</form>
	);
};

export default UserForm;
