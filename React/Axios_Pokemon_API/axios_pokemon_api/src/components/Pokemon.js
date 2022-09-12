import React, {useState} from "react";
import axios from "axios";

const Pokemon = () => {
    const[pokemon, setPokemon] = useState([]);


    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                setPokemon(response.data.results)
            });
    };

    return(
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <hr />
            {
                pokemon.map((pokemon, i) => {
                    return(
                        <ul>
                            <li>{pokemon.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Pokemon;