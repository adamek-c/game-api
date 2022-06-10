import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AsideContent from "./AsideContent";

const Aside = ({ mobileOpen, drawerWidth, handleDrawerToggle }) => {
	return (
		<Box
			component="nav"
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 },
			}}
			aria-label="menu Content"
		>
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<AsideContent />
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
				open
			>
				<AsideContent />
			</Drawer>
		</Box>
	);
};

export default Aside;
