import React from 'react';

const ForecastItem = ({ data }) => {
  if (!data) return null;

  const date = new Date(data.date); // 날짜 데이터를 Date 객체로 변환
  const day = date.toLocaleDateString('ko-KR', { weekday: 'short' });

  const minTemp = Math.round(data.temp_min);
  const maxTemp = Math.round(data.temp_max);

  const weatherIcons = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Snow: '❄️',
  };

  return (
    <div className="forecast-item">
      <div className="day">{day}</div>
      <div className="icon">{weatherIcons[data.weather.main] || '🌈'}</div>
      <div className="temp">
        <span className="temp-label">{minTemp}°</span>
        <div className="bar-container">
          <div
            className="bar"
            style={{
              width: `${(maxTemp - minTemp) * 10}%`,
              left: `${minTemp * 2}px`,
            }}
          ></div>
        </div>
        <span className="temp-label">{maxTemp}°</span>
      </div>
    </div>
  );
};

export default ForecastItem;
