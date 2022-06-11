import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const FilmContext = createContext();

const Film = ({ children }) => {
	const [films, setFilms] = useState(null);
	const [isLoading, setIsloading] = useState(false);

	const fetchFilms = async () => {
		const url = `https://api.rawg.io/api/games?key=e6af0c8a3c84418ea71a4d1099116c77&page=1&page_size=20`;
		setIsloading(!isLoading);
		try {
			// I remove url
			const resp = await axios.get();
			const { results } = resp.data;
			if (results) {
				console.log(results);
				setFilms(results);
				setIsloading(!isLoading);
			}
		} catch (error) {
			throw new Error("something go wrong!");
		}
	};

	useEffect(() => {
		fetchFilms();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FilmContext.Provider value={{ films, isLoading }}>
			{children}
		</FilmContext.Provider>
	);
};

export const useGlobalFilm = () => {
	return useContext(FilmContext);
};

export { Film, FilmContext };
