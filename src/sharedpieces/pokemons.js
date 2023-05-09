import React, { useState, useEffect } from "react";
import './headers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//fetch the JSON data for the individual pokemon

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    // what if we added generations?
    const [generations, setGenerations] = useState([]);
    // selected gen needs to be null until it is clicked
    const [selectedGen, setSelectedGen] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
          const pokemonArr = [];

    // there are 8 generations of pokemon
    // each gen has about 151 unique pokemon

          for (let i = 1; i <= 8; i++) {
            // the 7th gen has a limit of 86 pokemon! 
            // oh NO the 3rd gen has 135
            // will need to revisit
            const limit = i === 7 ? 86 : 151;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=${(i - 1) * 151}`);
            const data = await response.json();
            pokemonArr.push(...data.results);
          }
    
          setPokemon(pokemonArr);
          //each generation is a key
          // setting the number of buttons that will appear
          setGenerations([...Array(8).keys()].map((i) => i + 1));
        };
    
        fetchPokemon();
      }, []);



// filter the pokemon - first we have to create a const for when the user
// clicks the generation button
const genClick = (generation) => {
    setSelectedGen(generation);
};

// now we filter the pokemon based on the 151 pokemon per gen
// wait!! the 7th gen only has 86 pokemon, so this code 
// leaves the 8th button broken
const filteredPoke = selectedGen
    ? pokemon.filter((p) => {
        // split url into array based on the "/"
        const gen = Math.ceil(p.url.split("/")[6] / 151);
        return gen === selectedGen;
      })
    : pokemon;

// button for all pokemon
const allPoke = () => {
    // pass null to the const
    setSelectedGen(null);
}

    return (
        <div className="container text-center py-3">
            <h1 className="pb-3"></h1>

            <div className="row mb-3">
                {generations.map((generation) => (
                    <div className="col pb-3" key={generation}>

                        <button className="btn btn-outline-danger" onClick={() => genClick(generation)}>
                            {`Generation ${generation}`}

                        </button>
                    </div>
                ))}

                <div className="col pb-3">
                    <button className="btn btn-outline-danger" onClick={allPoke}>
                        All Pokemon
                    </button>
                </div>

            </div>


            <div className="row row-cols-3 row-cols-md-6 g-4">
                {filteredPoke.map((p) => (
                    <div className="col mb-3" key={p.name}>
                        <div className="card h-100">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split("/")[6]}.png`} className="card-img-top" alt={p.name} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-truncate text-break text-sm">{p.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default Pokemon;