import "./NewUser.css";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const NewUser = () => {
	return (
		<Card className="new-user">
			<UserForm></UserForm>
		</Card>
	);
};

export default NewUser;
