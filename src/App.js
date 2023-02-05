import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const App = () => {
	const [users, setUsers] = useState([]);

	const newUserHandler = (user) => {
		setUsers([user, ...users]);
	};

	return (
		<main className="app">
			<NewUser onAddNewUser={newUserHandler} />
			{users.length > 0 && <UsersList users={users} />}
		</main>
	);
};

export default App;
