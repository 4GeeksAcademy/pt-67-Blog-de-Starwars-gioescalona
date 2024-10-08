import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharactersInfo } from "./views/charactersInfo";
import { VehiclesInfo } from "./views/vehiclesInfo";
import { PlanetsInfo } from "./views/planetsInfo"



const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/charactersInfo/:uid" element={<CharactersInfo />} />
						<Route path="/vehiclesInfo/:uid" element={<VehiclesInfo />} />
						<Route path="/planetsInfo/:uid" element={<PlanetsInfo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);