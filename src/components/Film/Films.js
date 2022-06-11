import * as React from "react";
import { useGlobalFilm } from "../../context/FilmsContext";
import FilmSharedComponent from "./FilmSharedComponent";

const Films = () => {
	const { films, isLoading } = useGlobalFilm();

	return (
		<>
			{/* {films.map((film) => {
				return <FilmSharedComponent {...film} key={film.id} />;
			})} */}
		</>
	);
};

export default Films;
