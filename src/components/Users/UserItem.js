import Card from "../UI/Card";
import "./UserItem.css";

const UserItem = (props) => {
	const { name, age } = props;
	return (
		<Card className="user-item">
			{name} ({+age} years old)
		</Card>
	);
};

export default UserItem;
