import React from "react";
import pikacard from '../images/pikacard.png';


const Home = () => {

    return (

        <div className="row justify-content-center">
            <div className="col-sm-8">
                <div className="card">
                    <br />
                    <div className="card-body p-3 mx-1 text-center">
                        <img src={pikacard} className="card-img-top" alt="..." style={{ maxHeight: '600px', maxWidth: '400px' }} />
                        <div className="card-body">

                            <h5 className="card-title">Random Trading Card</h5>
                        </div>

                        <div className="card-footer">
                            <a href="#" className="btn btn-danger">Trade Card</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;