import React, {useState} from "react";

const Pokemon = () => {
    const[pokemon, setPokemon] = useState([])


    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
            })
    }

    return(
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
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
    )
}

export default Pokemon;