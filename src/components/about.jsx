// import React from "react";
import { Link } from "react-router-dom";

const about = () => {
	return (
		<>
			<div className="text-white text-4xl">This is about Page </div>;
			<Link
				to={"/Home"}
				className="text-white text-4xl border-2"
			>
				Go to Home
			</Link>
		</>
	);
};

export default about;
