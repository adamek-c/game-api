import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { IconButton } from "@mui/material";

const Widgets = () => {
	return (
		<>
			<IconButton>
				<FavoriteBorderIcon />
			</IconButton>
			<IconButton sx={{ mx: "1rem" }}>
				<GridViewIcon />
			</IconButton>
			<IconButton>
				<ViewListIcon />
			</IconButton>
		</>
	);
};

export default Widgets;
