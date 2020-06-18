import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

export default () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>
            {movies.map(({ name, director }, i) => (
                <Movie name={ name } director={ director } key={i} />
            ))}
        </>
    )
}