import React from 'react';
import Card from './Card';
function Tour({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan with Om</h1>
      </div>
      <div className="cards"> 
        {tours.map((singleTour) => (
          <Card key={singleTour.id} {...singleTour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tour;
