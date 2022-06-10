import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { IconButton } from "@mui/material";

const Widgets = () => {
	return (
		<>
			<IconButton sx={{ color: "text.primary" }}>
				<FavoriteBorderIcon />
			</IconButton>
			<IconButton sx={{ mx: "1rem", color: "text.primary" }}>
				<GridViewIcon />
			</IconButton>
			<IconButton sx={{ color: "text.primary" }}>
				<ViewListIcon />
			</IconButton>
		</>
	);
};

export default Widgets;
