import Card from "../UI/Card";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
	const { users } = props;
	return (
		<Card className="users-list">
			{users.map((user) => (
				<UserItem
					key={Math.random().toString(16)}
					name={user.name}
					age={user.age}
				/>
			))}
		</Card>
	);
};

export default UsersList;
