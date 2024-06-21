import React from 'react';
import '../styles/Card.css';  // Updated path

const Card = ({ index }) => (
  <div className="card">
    <div className="card-box" style={{ backgroundColor: getBackgroundColor(index) }}>
      <div className="card-image"></div>
    </div>
  </div>
);

const getBackgroundColor = (index) => {
  const colors = ['#E31D65', '#FF7C35', '#FFCB36', '#25A954', '#007D97'];
  return colors[index % colors.length];
};

export default Card;
