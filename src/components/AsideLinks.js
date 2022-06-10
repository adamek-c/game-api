import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Widgets from "./Widgets";

const AsideLinks = () => {
	return (
		<>
			<div>
				<Toolbar />
				<List>
					<Box
						sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}
					>
						<Widgets />
					</Box>
				</List>
			</div>
		</>
	);
};

export default AsideLinks;
