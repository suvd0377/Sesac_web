import React from 'react';

const WeatherIcon = ({ weatherType }) => {
  const icons = {
    sunny: '☀️',
    cloudy: '☁️',
    rainy: '🌧️',
    snowy: '❄️',
  };

  return (
    <div className="weather-icon">
      <span>{icons[weatherType] || '🌈'}</span>
    </div>
  );
};

export default WeatherIcon;
