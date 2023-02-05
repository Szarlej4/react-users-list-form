import { useState } from "react";
import "./UserForm.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";

const UserForm = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const onNameChangeHandler = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};

	const onAgeChangeHandler = (e) => {
		console.log(e.target.value);
		setAge(e.target.value);
	};

	const clickHandler = (e) => {
		e.preventDefault();
		if (name) {
			console.log("essa");
			setName("");
			setAge("");
			return;
		}
		console.log("somethings missing");
	};

	return (
		<form action="" className="user-form">
			<div className="user-form__input-wrapepr">
				<label htmlFor="" className="input-wraper__label">
					Name
				</label>
				<input
					value={name}
					onChange={onNameChangeHandler}
					type="text"
					className="input-wraper__input"
				/>
			</div>
			<div className="user-form__input-wrapepr">
				<label htmlFor="" className="input-wraper__label">
					Age (years)
				</label>
				<input
					value={age}
					onChange={onAgeChangeHandler}
					type="text"
					className="input-wraper__input"
				/>
			</div>
			<Button type="submit" onClick={clickHandler} text="Add new user" />
		</form>
	);
};

export default UserForm;
