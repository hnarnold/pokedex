import React from 'react';
import { Card } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';

function FavoriteCards() {
  const cardData = [
    { title: 'Favorite Card 1' },
    { title: 'Favorite Card 2' },
    { title: 'Favorite Card 3' },
    { title: 'Favorite Card 4' },
    { title: 'Favorite Card 5' },
    { title: 'Favorite Card 6' }
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{card.title}</Card.Title>
                <HeartFill size={30} className="mb-2 text-danger" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCards;