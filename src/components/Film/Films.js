import { Grid } from "@mui/material";
import { useGlobalFilm } from "../../context/FilmsContext";

import FilmSharedComponent from "./FilmSharedComponent";

const Films = ({ setOpen }) => {
	const { results: films } = useGlobalFilm();

	return (
		<Grid
			container
			spacing={2}
			columns={{ xs: 1, sm: 1, md: 12, lg: 12, xl: 12 }}
			sx={{ bgcolor: "background.default" }}
		>
			{films.map((film) => {
				return (
					<Grid item xs={1} sm={1} md={12} lg={6} xl={4} key={film.id}>
						<FilmSharedComponent {...film} setOpen={setOpen} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Films;
