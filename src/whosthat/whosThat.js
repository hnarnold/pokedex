//import React, { useState } from 'react';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import whosThatBkGrd from '../images/whosthatpokebkgrd.png';

const WhosThatPoke = () => {

  const imageUrl = whosThatBkGrd;


  return (
    <div className="container py-4 justify-content-center">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
          <Card className="h-100 w-200">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Button variant="danger" size="lg" className="mt-auto">
                Play Round
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default WhosThatPoke;
