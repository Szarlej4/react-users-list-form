import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";

function App() {
	return (
		<main className="app">
			<NewUser />
			<UsersList />
		</main>
	);
}

export default App;
