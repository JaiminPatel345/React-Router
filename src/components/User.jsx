import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { user, setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(password);

		setUser({ username, password });
		console.log(user);
		// Navigate("/home");
	};

	return (
		<div>
			<div>
				<h2>Login</h2>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
				/>{" "}
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>

			<div>
				<Link to={"/home"}>home page</Link>
			</div>
		</div>
	);
}

export default Login;
