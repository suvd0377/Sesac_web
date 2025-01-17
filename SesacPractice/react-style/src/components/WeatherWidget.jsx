import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ForecastItem from './ForecastItem';
import '../style/_weather.scss';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = 'da450c832635d5d57538d8acdd43e25f';
  const CITY = 'Seoul';
  const UNITS = 'metric';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`,
        );

        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=${UNITS}&appid=${API_KEY}`,
        );

        // 데이터 전처리: 하루별로 그룹화
        const groupedData = forecastRes.data.list.reduce((acc, item) => {
          const date = item.dt_txt.split(' ')[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(item);
          return acc;
        }, {});

        // 하루별 최고 기온 및 최저 기온 계산
        const dailyData = Object.keys(groupedData).map(date => {
          const dayData = groupedData[date];
          const temps = dayData.map(item => item.main.temp);
          const temp_min = Math.min(...temps);
          const temp_max = Math.max(...temps);

          return {
            date,
            temp_min,
            temp_max,
            weather: dayData[0].weather[0], // 하루의 첫 번째 날씨 데이터
          };
        });

        setWeather(weatherRes.data);
        setForecast(dailyData.slice(0, 5)); // 5일치 데이터만 표시
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="weather-widget">
      <div className="current-weather">
        <h2>{weather.name}</h2>
        <div className="temperature">{Math.round(weather.main.temp)}°C</div>
        <div className="description">
          내일의 최고 기온은 {Math.round(forecast[1]?.temp_max || 0)}°C로, 더
          높은 기온이 예상됨
        </div>
      </div>
      <div className="forecast">
        {forecast.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
