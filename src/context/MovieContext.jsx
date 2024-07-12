import { createContext, useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [trendsMovies, setTrendsMovies] = useState([]);

    const getTrendsMovies = async () => {
        const data = await getMovies('/trending/movie/day?language=es-ES');
        setTrendsMovies(data);
    }

    useEffect(() => {
        getTrendsMovies();
    }, []);


    return (
        <MovieContext.Provider 
            value={
                { 
                    trendsMovies
                }
            }
        >
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider