import pikacard from '../images/pikacard.png';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import createCard from "../sharedpieces/createCard";
import Card from '../sharedpieces/pokecard';
import '../sharedpieces/card.css'






const Home = () => {

    const [cardprops, setcardprops] = React.useState({});
    const [loaded, setloaded] = React.useState(false);
    const [randomNum, setRandomNum] = React.useState(Math.floor(Math.random()*800+1));


      function getNewPoke() {
        setRandomNum(prevnum => Math.floor(Math.random()*800+1));
      }
      
      
      useEffect(() => {

        // javascript has a short attention span
        // do not load card until we know we have the data!
        // createCard - .then takes result and stores
        // when setloaded is false the javascript moves past it
        // only time it's true is when createCard 
        // confirms it has gotten the results
        createCard(randomNum).then((result) => 
            {
                setcardprops(result);
                setloaded(true);
            })

        // ???????
      }, [randomNum]);

    return (

        <div className="row justify-content-center">
            <div className="col-sm-8 justify-content-center">
                <div className="card h-100 max-w-300 justify-content-center">
                    <br />
                    <div className="justify-content-center card-body p-3 mx-1 text-center">
                        <div className='pleasecenter'>

                        {loaded&&
                        <Card {...cardprops}> 
                        </Card>}
                            
                        </div>
                
                        <div className="card-body justify-content-center">
                        </div>

                        <div className="card-footer">
                            <button onClick={getNewPoke} className="btn btn-danger">Trade Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;