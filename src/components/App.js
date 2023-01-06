import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

import './App.css';

const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5' 

class App extends Component {
  state = { 
    value: '',
    city: '',
    date: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    pressure: '',
    err: false,
   } 

   handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
   }

   handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(prevState => ({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        city: prevState.value,
      }))
    })
    .catch(err => {
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
    })
   }


  render() { 
    return (
      <div className="App">
        <h1>Aplikacja pogodowa</h1>
        <h2>Sprawdź pogodę dla wybranego miasta</h2>
        <Form 
        value={this.state.value}
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result 
        weather={this.state}
        />
      </div>
    );
  }
}
 
export default App;
