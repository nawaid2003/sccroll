import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card from './Card';
import '../styles/CardContainer.css';  // Updated path

const CardContainer = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    
    const revealChildren = () => {
      sr.reveal('.card-image', {
        duration: 500,
        scale: 1,
        distance: '20px',
        origin: 'bottom',
        reset: true,
        easing: 'ease-out',
        viewFactor: 1,
      }, 75);
    };

    sr.reveal('.card-box', {
      duration: 600,
      distance: '20px',
      easing: 'ease-out',
      origin: 'bottom',
      reset: true,
      scale: 1,
      viewFactor: 0,
      afterReveal: revealChildren,
    }, 150);
  }, []);

  const cards = Array.from({ length: 20 }).map((_, index) => (
    <Card
      key={index}
      index={index}
    />
  ));

  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
