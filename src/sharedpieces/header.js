import React from 'react';
import { NavLink } from "react-router-dom";
import './headers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House, Heart, Grid, PatchQuestion } from 'react-bootstrap-icons'; // import the icons
import pokedexIcon from '../images/Pokedex.png';


// define the header
const Header = () => {

  return (

    <div className="px-3 py-2 bg-danger text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink to="/home" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
    
          </NavLink>
          <div className="container-fluid">
            <div className="row">
              <div className="row justify-content-center">
                <div className="h-50 w-50 col-sm-12 col-md-6 col-lg-4">
                <img src={pokedexIcon} alt="pokedexIcon" className="img-fluid mx-auto d-block" style={{maxHeight: '200px', maxWidth: '200px'}} />
                </div>
              </div>
            </div>
          </div>

          <ul className="nav w-100 my-2 d-flex justify-content-center my-md-0 text-small">
            <li>
              <NavLink to="/home" className="nav-link text-white">
              <House className="bi d-block mx-auto mb-1" size={20} />
                Home
              
              </NavLink>
            </li>
            <li>
              <NavLink to="/pokedex" className="nav-link text-white">
              <Grid className="bi d-block mx-auto mb-1" size={20} />
                Pokedex
                
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className="nav-link text-white">
              <Heart className="bi d-block mx-auto mb-1" size={20} />
                Favorites
                
              </NavLink>
            </li>
            <li>
              <NavLink to="/who" className="nav-link text-white">
              <PatchQuestion className="bi d-block mx-auto mb-1" size={20} />
                Who's That Pokemon
               
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Header;