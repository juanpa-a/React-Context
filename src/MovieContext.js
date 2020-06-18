import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [ movies, setMovies ] = useState([
            {
                name: "Batman",
                director: "C. Nolan"
            },
            {
                name: "Joker",
                director: "dude form hangover"
            }
        ]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
    
}
