class User {
	constructor(name, age) {
		this.id = Date.now().toString(32) + Math.random().toString(16);
		this.name = name;
		this.age = age;
	}
}

export default User;
