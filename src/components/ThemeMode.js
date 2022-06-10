/* eslint-disable no-unreachable */
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SharedLayout from "../pages/SharedLayout";
import { grey } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: { main: grey[900] },
					text: {
						primary: "#fff",
						secondary: grey[800],
					},
					background: {
						default: "#222a3e",
						paper: "#222a3e",
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: "#9295a5",
					},
					background: {
						default: "#222a3e",
						paper: "#222a3e",
					},
					text: {
						primary: "#9295a5",
					},
			  }),
	},
});

const ThemeMode = ({ children }) => {
	const [mode, setMode] = React.useState("dark");
	const colorMode = React.useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	// Update the theme only if the mode changes
	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export { ThemeMode };