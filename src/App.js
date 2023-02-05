import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";
import User from "./classes/User";
import { useState } from "react";

const initialUsers = [
	new User("John", 33),
	new User("Arthur", 3),
	new User("Michael", 53),
	new User("Drake", 17),
	new User("Simon", 23),
];

const App = () => {
	const [users, setUsers] = useState(initialUsers);

	const newUserHandler = (user) => {
		setUsers([user, ...users]);
	};

	return (
		<main className="app">
			<NewUser onAddNewUser={newUserHandler} />
			<UsersList users={users} />
		</main>
	);
};

export default App;
