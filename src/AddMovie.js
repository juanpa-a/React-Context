import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";


export default () => {

    const [ movies, setMovies ] = useContext(MovieContext);

    const [name, setName] = useState();
    const [director, setDirector] = useState();

    const updateName = e => setName(e.target.value);
    const updateDirector = e => setDirector(e.target.value);

    const addMovie = e => {
        e.preventDefault();
        setMovies( movies => [...movies, {name: name, director: director}] )
    }

    return(
        <>
            <form>
                <input type="text" name="name" value={name}  onChange={updateName} />
                <input type="text" name="director" value={director}  onChange={updateDirector} />
                <button onClick={addMovie}>Submit!</button>
            </form>
        </>
    )
}