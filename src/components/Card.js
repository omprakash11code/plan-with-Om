import { useState } from "react";

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
    
  const description = readmore ? info : `${info.substring(0, 200)}....`;
    
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"  alt={name} />
      <div className="card-body">
        <h2 className="tour-name">{name}</h2>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `....Show Less` : `Read More`}
          </span>
        </div>
        <h3 className="tour-price">₹{price}</h3>
        <button className="btn-red"  onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Card;
