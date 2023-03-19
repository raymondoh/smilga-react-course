import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, onRemoveTour }) => {
  const renderTours =
    tours &&
    tours.map(tour => {
      return <Tour key={tour.id} tour={tour} onRemoveTour={onRemoveTour} />;
    });
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">{renderTours}</div>
    </section>
  );
};

export default Tours;
