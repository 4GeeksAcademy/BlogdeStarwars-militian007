import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route element={<Home />} path="/" />
					{/* Ruta corregida para Single */}
					<Route element={<Single />} path="/single/:category/:theId" />
					<Route element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);