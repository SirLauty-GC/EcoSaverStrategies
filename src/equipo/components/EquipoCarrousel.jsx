import React, { useEffect, useState } from 'react';


const images = [
  'images/equipo/presentacion-el-paseo.webp',
  'images/equipo/presentacion-escenario.webp',
  'images/equipo/presentacion-3er-episodio.webp',
  'images/equipo/foto-progreso.webp'
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
    <div className="relative w-[1009px] h-[350px] mx-auto overflow-hidden rounded-3xl">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`${image}`}
            alt={`Imágen: ${image}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
