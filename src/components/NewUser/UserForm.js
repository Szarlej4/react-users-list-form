import { useState } from "react";
import "./UserForm.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import User from "../../classes/User";

const UserForm = (props) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [errorText, setErrorText] = useState("");
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
			if (name.length < 30) {
				if (age > 1 && age < 100 && Math.floor(age) !== age) {
					props.onAddNewUser(new User(name, age));
					setName("");
					setAge("");
					return;
				} else {
					setErrorText(
						"Please enter a valid age (natural number between 1 and 150 years).",
					);
				}
			} else {
				setErrorText(
					"Please enter a valid name (shorter than 30 letters).",
				);
			}
		} else {
			setErrorText(
				"Please enter a valid name and age (non-empty values).",
			);
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
				<Modal
					errorText={errorText}
					onSwitchedVisibility={switchIsModalHidden}
				/>
			)}
		</form>
	);
};

export default UserForm;
