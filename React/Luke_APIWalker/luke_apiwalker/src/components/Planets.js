import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Planets = (props) => {
    const [planets, setPlanets] = useState();
    const [error, setError] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            console.log(response.data)
            setPlanets(response.data)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }, [id])

    return(
        <div className="results">
            { planets && 
            <>
            <h2>{planets.name}</h2>
            <p><span>Climate: </span>{planets.climate}</p>
            <p><span>Terrain: </span>{planets.terrain}</p>
            <p><span>Surface Water: </span>{planets.surface_water}</p>
            <p><span>Population: </span>{planets.population}</p>
            </>
            }
            { error &&
            <>
            <img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="Obi-Wan_kenobi" />
            </>
            }
        </div>
    )
}

export default Planets;