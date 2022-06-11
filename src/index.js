import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeMode } from "./context/ThemeContext";
import { Film } from "./context/FilmsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeMode>
				<Film>
					<App />
				</Film>
			</ThemeMode>
		</React.StrictMode>
	</BrowserRouter>
);
