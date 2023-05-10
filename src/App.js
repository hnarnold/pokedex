import React from "react";
import { BrowserRouter as Router,
        Routes,
        Route} from "react-router-dom";


import Header from "./sharedpieces/header";
import Home from "./home/home";
import PokemonList from "./sharedpieces/pokemonList";
import SignIn from "./sharedpieces/signIn";
import FavoriteCards from "./favorites/favorites";
import WhosThatPoke from "./whosthat/whosThat";


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

      <Routes>
      <Route path="/favorites" element={<FavoriteCards />} />
      </Routes>

      <Routes>
        <Route path="/who" element={<WhosThatPoke />} />
      </Routes>

      <Routes>
      <Route path="/signIn" element={<SignIn />} />
      </Routes>


    </Router>
  );
};

export default App;
