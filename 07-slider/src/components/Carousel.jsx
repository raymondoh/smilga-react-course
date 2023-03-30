import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { shortList, list, longList } from "../data";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(1);

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextSlide = () => {
    setCurrentPerson(oldPerson => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
    // setCurrentPerson(currentIndex => {
    //   const newIndex = currentIndex + 1;

    //   return checkNumber(newIndex);
    // });
  };
  const prevSlide = () => {
    setCurrentPerson(currentIndex => {
      const newIndex = currentIndex - 1;

      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  const renderList = people.map((person, personIndex) => {
    const { id, image, name, title, quote } = person;
    return (
      <article
        className="slide"
        key={id}
        style={{
          transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
          opacity: personIndex === currentPerson ? 1 : 0,
          visibilty: personIndex === currentPerson ? "visible" : "hidden",
        }}>
        <img src={image} alt={name} className="person-img" />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </article>
    );
  });
  return (
    <section className="slider-container">
      {renderList}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
