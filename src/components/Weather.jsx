import React from 'react'
import { useEffect, useState} from 'react'
import search_icon from './search.png'
import clear_icon from './clear.png'
import humidity_icon from './humidity.png'
import wind_icon from './wind.png'

  const Weather = () => {

  const [search,setSearch] = useState("chennai");
  const [city,setCity] = useState(null);

  const getWeatherData = async()=>
  {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d8510bd5e0a1b5ed7cc1fd142e0a275&units=metric`);
  let result = await response.json();
  setCity(result)  
 }
useEffect(()=>{
  getWeatherData();
},[search])

  return (
    <div>
      <div className='weather'>
        <div className='search-bar'>
            <input type="text" placeholder='Search'
            onChange={(e)=>setSearch(e.target.value)}/>
           <img src={search_icon} alt=""></img> 
        </div>
        <img src={clear_icon} alt="" className='weather-icon'></img> 
        <p className='temperature'>
        {city?.main?.temp}°C 
          </p>
        <p className='location'></p>
        <div className='weather-data'>
            <div className='h'>
              <img src={humidity_icon} alt=''></img>
              <p>{city?.main?.humidity}%</p>
              <span>Humidity</span>
            </div>
            <div className='h'>
              <img src={wind_icon} alt=''></img>
              <p>{city?.wind?.speed}km/h</p>
              <span>Wind speed</span>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Weather
