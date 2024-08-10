import React, { useEffect, useState } from 'react';
import ArgCampeon from '../../img/equipo/arg-campeon.jpg';
import BilardoChampagne from '../../img/equipo/bilardo-champagne.jpg';
import RandomBullshitGo from '../../img//equipo/random-bullshit-go.jpg';
import Ratoncito from '../../img/equipo/ratoncito.jpg';

const images = [
  ArgCampeon,
  BilardoChampagne,
  RandomBullshitGo,
  Ratoncito,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
