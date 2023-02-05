import Card from "../UI/Card";

const UserItem = (props) => {
	const { name, age } = props;
	return (
		<Card className="user-item">
			{name} ({age} years old)
		</Card>
	);
};

export default UserItem;
