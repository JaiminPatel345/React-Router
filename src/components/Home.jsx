// import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Home = () => {
	const { user } = useContext(UserContext);
	if (!user) return <h1>Not logged in </h1>;
	console.log(user);

	return (
		<>
			<h1 className="text-5xl bg-pink-300"> Username : {user.username} </h1>
			<br />
			<br />
			<h1 className="text-5xl bg-pink-300"> Password : {user.password} </h1>
		</>
	);
};

export default Home;
