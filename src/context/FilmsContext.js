import { useAxios } from "use-axios";
import { createContext, useContext } from "react";

const url = `https://api.rawg.io/api/games?key=e6af0c8a3c84418ea71a4d1099116c77&page=1&page_size=20`;

const FilmContext = createContext();

const Film = ({ children }) => {
	const {
		data: { results },
	} = useAxios(url);

	return (
		<FilmContext.Provider value={{ results }}>{children}</FilmContext.Provider>
	);
};

export const useGlobalFilm = () => {
	return useContext(FilmContext);
};

export { Film, FilmContext };
