import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = 'London') {
    try {
      // const request = await fetch('https://api.openweathermap.org/geo/1.0/direct?q=London&appid=3ddea520b50e1e9f35af8b57e4807dbe');
      // const request = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=3ddea520b50e1e9f35af8b57e4807dbe`);
      // const request = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_KEY}`);
      const request = await fetch(`${process.env.REACT_APP_URL}q=${city}&appid=${process.env.REACT_APP_KEY}`);

      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {
      
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>Info</div>
    </>
  );
}
