import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";
import User from "./classes/User";

const users = [
	new User("John", 33),
	new User("Arthur", 3),
	new User("Michael", 53),
	new User("Drake", 17),
	new User("Simon", 23),
];

const App = () => {
	return (
		<main className="app">
			<NewUser />
			<UsersList users={users} />
		</main>
	);
};

export default App;
