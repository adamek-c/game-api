import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeMode } from "./components/ThemeMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeMode>
				<App />
			</ThemeMode>
		</React.StrictMode>
	</BrowserRouter>
);
