import React, { useContext } from "react";
import { MovieContext } from "./MovieContext"

export default () => {

    const [ movies, setMovies ] = useContext(MovieContext);

    return (
        <>
            <h3>{"Juanpa's lerning process :)"}</h3>
            <p>List of movies: {movies.length}</p>
        </>
    )
}