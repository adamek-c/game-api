import * as React from "react";
import { Suspense } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Aside, FilmModal, SearchInput } from "../components";

const drawerWidth = 240;

const Films = React.lazy(() => import("../components/Film/Films"));

const Home = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [open, setOpen] = React.useState(false);

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
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 6,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<Suspense fallback={<h1>Loading....</h1>}>
						<Films setOpen={setOpen} />
					</Suspense>
				</Box>
				<FilmModal setOpen={setOpen} open={open} />
			</Box>
		</>
	);
};

export default Home;
