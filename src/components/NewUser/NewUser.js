import "./NewUser.css";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const NewUser = (props) => {
	const newUserHandler = (user) => {
		props.onAddNewUser(user);
	};
	return (
		<Card className="new-user">
			<UserForm onAddNewUser={newUserHandler}></UserForm>
		</Card>
	);
};

export default NewUser;
