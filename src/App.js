import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { Home, Error } from "./pages";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
