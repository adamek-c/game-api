import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Widgets from "./Widgets";

const SearchInput = ({ handleDrawerToggle, drawerWidth }) => {
	return (
		<div>
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					p: 1.2,
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							alignItems: "center",
						}}
					>
						<TextField
							sx={{ flex: { sm: 1 } }}
							id="standard-basic"
							variant="standard"
							defaultValue="Search"
							fullWidth
						></TextField>
						<Box
							sx={{
								flex: 1,
								textAlign: "right",
								display: { xs: "none", md: "block" },
							}}
						>
							<Widgets />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default SearchInput;
