import React from "react";
import { BrowserRouter as Router,
        Routes,
        Route} from "react-router-dom";


import Header from "./sharedpieces/header";
import Home from "./home/home";
import PokemonList from "./sharedpieces/pokemonList";


const App = () => {
  return (
    <Router>
      <div className="app">
      <Header />
      </div>

      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>

      <Routes>
      <Route path="/pokedex" element={<PokemonList />} />
      </Routes>



    </Router>
  );
};

export default App;
