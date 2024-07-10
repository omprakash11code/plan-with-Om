import React, { useState } from 'react';
import data from './data';
import Tour from './components/Tour';

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if(tours.length==0){
    return(
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className=" btn-white" onClick={()=>setTours(data)}> Refresh </button>
      </div>
    )
  }

  return (
    <div className="App">
      
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
