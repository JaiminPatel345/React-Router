// import React from "react";
// import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Header = () => {
	return (
		<>
			<h1>HEader</h1>
			<br />
			<br />
			<br />
			<Outlet></Outlet>
		</>
	);
};

export default Header;
