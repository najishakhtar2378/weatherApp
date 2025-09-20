import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
  const[weatherInfo,setWeatherInfo]=useState({ 
    city:"WonderLand",
    feelsLike: 31.7,
    humidity: 100,
    temp: 26.96,
    tempMin: 26.96,
    tempMax: 26.96,
    weather: "mist",
  })
  let updateInfo=(result)=>{
    setWeatherInfo(result)
  }
  return( 
  <div style={{textAlign:"center"}}>
    <h2>Weather App by Najish</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
  </div>)
}