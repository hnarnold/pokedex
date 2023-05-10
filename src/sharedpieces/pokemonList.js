import React, { useState, useEffect } from "react";
import './headers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import createCard from "./createCard";
import Card from '../sharedpieces/pokecard';
import '../sharedpieces/card.css'



// this file component that fetches data from the PokeAPI 
// then renders a list of Pokemon with their images and types.

const PokemonList = () => {
  // create my array
  const [pokemon, setPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);

  const [cardprops, setcardprops] = useState({});
  const [loaded, setloaded] = useState(false);



  const fetchPokemon = async () => {
    // setting limits for each generation
    let limit, offset;
    switch (generation) {
      case 1:
        limit = 151;
        offset = 0;
        break;
      case 2:
        limit = 100;
        offset = 151;
        break;
      case 3:
        limit = 135;
        offset = 251;
        break;
      case 4:
        limit = 107;
        offset = 386;
        break;
      case 5:
        limit = 156;
        offset = 493;
        break;
      case 6:
        limit = 72;
        offset = 649;
        break;
      case 7:
        limit = 86;
        offset = 721;
        break;
      case 8:
        limit = 96;
        offset = 809;
        break;
      default:
        limit = 151;
        offset = 0;
    }

    // retrieve the API info 
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=+${limit}&offset=+${offset}`);
    const data = response.data.results;

    const pokemonData = await Promise.all(data.map(async (result) => {
      const res = await axios.get(result.url);
      return res.data;
    }));

    // filer pokemon based on Gen
    // filter method creates a new array
    // id greater than offset
    // less than or equal to the (offset+limit)
    const filteredPokemon = pokemonData.filter(
      (poke) =>
        poke.id > offset && poke.id <= offset + limit
    );
    // function called with filteredPokemon
    // update the state of the pokemon variable w/ filter
    setPokemon(filteredPokemon);
  };


  useEffect(() => {
    fetchPokemon();
  }, [generation]);

  // 



  const renderPokemon = () => {

    function showCard(pokeId) {
        createCard(pokeId).then((result) => {
        setcardprops(result);
        setloaded(true);
      })
    }

    return (
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">





        {loaded &&
        <div >
              <Card {...cardprops}>
              </Card>
              </div>}






              
        {pokemon.map((poke) => (
          <div onClick={() => showCard(poke.id)} key={poke.id} className="col-mb-4">

            <div className="card h-100 max-w-300">
              <img
                src={poke.sprites.front_default}
                className="card-img-top"
                alt={poke.name}
              />
              <div className="card-body">
                <h5 className="card-title card-title text-center text-truncate text-break">
                  {poke.name}
                </h5>
                <p className="card-text card-title text-center text-truncate text-break">
                  Type:
                  {poke.types.map(type => type.type.name).join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-3 py-4">
        <div className="btn-group" role="group" aria-label="Generations">
          <button
            type="button"
            className={`btn btn-secondary ${generation === 1 ? "active" : ""}`}
            onClick={() => setGeneration(1)}
          >
            Gen 1
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 2 ? "active" : ""}`}
            onClick={() => setGeneration(2)}
          >
            Gen 2
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 3 ? "active" : ""}`}
            onClick={() => setGeneration(3)}
          >
            Gen 3
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 4 ? "active" : ""}`}
            onClick={() => setGeneration(4)}
          >
            Gen 4
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 5 ? "active" : ""}`}
            onClick={() => setGeneration(5)}
          >
            Gen 5
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 6 ? "active" : ""}`}
            onClick={() => setGeneration(6)}
          >
            Gen 6
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 7 ? "active" : ""}`}
            onClick={() => setGeneration(7)}
          >
            Gen 7
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${generation === 8 ? "active" : ""}`}
            onClick={() => setGeneration(8)}
          >
            Gen 8
          </button>
        </div>
      </div>
      {renderPokemon()}

    </div>
  );


};

export default PokemonList;