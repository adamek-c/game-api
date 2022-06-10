import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Aside, SearchInput } from "../components";

const drawerWidth = 240;

const Home = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<SearchInput
					handleDrawerToggle={handleDrawerToggle}
					drawerWidth={drawerWidth}
				/>
				<Aside
					drawerWidth={drawerWidth}
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
				/>
				<Toolbar />
				<Toolbar />
			</Box>
		</>
	);
};

export default Home;
