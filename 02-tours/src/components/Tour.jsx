import React, { useState } from "react";

const Tour = ({ tour, onRemoveTour }) => {
  //const { id, image, info, name, price, onRemoveTour } = tour;
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}

          <button type="button" className="info-btn" onClick={handleReadMore}>
            {readMore ? "...show less" : "read more"}
          </button>
        </p>
        <button onClick={() => onRemoveTour(tour.id)} type="button" className="btn btn-block delete-btn">
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
