import React from "react";
import './headers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// This file fetches the API data and renders a list of pokemon names

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemonData(data.results));
  }, []);

  return (
    <div className="row">
      {pokemonData.map(pokemon => (
        <div className="col-3 mb-3" key={pokemon.name}>
          <Pokemon name={pokemon.name} url={pokemon.url} />
        </div>
      ))}
    </div>
  );
}
export const Pokemon;
