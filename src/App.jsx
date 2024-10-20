import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about.jsx";
import Header from "./components/Header/Header.jsx";
import User from "./components/User.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
const App = () => {
	return (
		<>
			<UserContextProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						{" "}
						<Route
							path="/home"
							element={<Home />}
						/>
						<Route
							path="/home/new"
							element={
								<div className="bg-rose-200 text-5xl">This is /Home/new</div>
							}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/login"
							element={<User />}
						/>
					</Routes>
				</BrowserRouter>
			</UserContextProvider>
		</>
	);
};

export default App;
