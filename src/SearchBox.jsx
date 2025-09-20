import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL ="https://api.openweathermap.org/data/2.5/weather";
  let API_KEY="2dbee60facdf03a4f34fb0e766e05e8e"
   let getWeatherInfo=async()=>{
    try{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
     let result = {
       city:city,
       temp: jsonResponse.main.temp,
       tempMin: jsonResponse.main.temp_min,
       tempMax: jsonResponse.main.temp_max,
       humidity: jsonResponse.main.humidity,
       feelsLike: jsonResponse.main.feels_like,
       weather: jsonResponse.weather[0].description,
     };
     console.log(result)
    return result;
    }catch(err){
      throw err;
    }
  
   };
  let handleOnChange=(event)=>{
    setCity(event.target.value);
  }
  let handleSubmit=async (event)=>{
    try{
    event.preventDefault();
    // console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
      setError(true);
    }
  }
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City-name" variant="outlined" required value={city} onChange={handleOnChange}/>
        <br /> <br />
         <Button variant="contained"type="submit">Search</Button>
         {error && <p style={{color:"red"}}> No such place Exist! </p>}
      </form>
    </div>
  );
}
