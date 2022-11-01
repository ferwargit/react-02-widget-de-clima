import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = 'London') {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

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
      <div>{weather?.current.temp_c}</div>
    </>
  );
}
