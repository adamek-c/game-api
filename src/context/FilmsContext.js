import axios from "axios";
import { useAxios } from "use-axios";
import { createContext, useContext, useEffect, useState } from "react";

const url = `https://api.rawg.io/api/games?key=e6af0c8a3c84418ea71a4d1099116c77&page=1&page_size=20`;

const FilmContext = createContext();

const Film = ({ children }) => {
	const [idFilm, setIdFilm] = useState();
	const [trailer, setTrailer] = useState();

	// trailer
	const urlTrailers = `https://api.rawg.io/api/games/${idFilm}/movies?key=e6af0c8a3c84418ea71a4d1099116c77`;

	// get all films
	const {
		data: { results },
	} = useAxios(url);

	// get trailer

	const fetchTrailer = async () => {
		try {
			const resp = await axios(urlTrailers);
			if (resp.data.count !== 0) {
				setTrailer(resp.data.results);
			} else {
				setTrailer(null);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTrailer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idFilm]);

	return (
		<FilmContext.Provider value={{ results, setIdFilm, trailer }}>
			{children}
		</FilmContext.Provider>
	);
};

export const useGlobalFilm = () => {
	return useContext(FilmContext);
};

export { Film, FilmContext };
