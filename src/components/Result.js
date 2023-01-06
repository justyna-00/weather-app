import React from 'react';

const Result = (props) => {
  const {err, city, date, sunrise, sunset, temp, pressure, wind} = props.weather
 
  let content = null

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(); 


    content = (
     <>
      <h3>Wyniki wyszukiwania dla miasta <em>{city}</em></h3>
      <h4>Dane dla dnia i godziny: {date}</h4>
      <p>Aktualna temperatura: <strong>{temp} &#176;C</strong></p>
      <p>Wschód słońca o: <strong>{sunriseTime}</strong></p>
      <p>Zachód słońca o: <strong>{sunsetTime}</strong></p>
      <p>Aktualna siła wiatru: <strong>{wind} m/s</strong></p>
      <p>Aktualne ciśnienie: <strong>{pressure} hPa</strong></p>
    </>
    )
  }

  return ( 
   <div className="result">
    {err ? `Nie znaleziono miasta ${city}` : content}
   </div>
   );
}
 
export default Result;