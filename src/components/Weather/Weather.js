import React, { Component } from "react";
import "./Weather.css";
import WeatherCard from "../WeatherCard";
import { v4 as uuidv4 } from "uuid";
import { userContext } from "../../context/userContext";
import axios from "axios";

class Weather extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      ciudad: "madrid",
      lat: "",
      lon: "",
    };
  }

  renderCards = () =>
    this.state.cards.map((card, i) => (
      <WeatherCard data={card} key={uuidv4()} />
    ));

  componentDidMount = async () => {
    this.cargarDatosTiempo(this.state.ciudad);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({ ciudad: e.target.ciudad.value });
    this.cargarDatosTiempo(this.state.ciudad);
    const userCont = this.context;
    userCont.setCity(this.state.ciudad);
    e.target.reset();
  };

  cargarDatosTiempo = async (ciudad) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = res.data;

    this.setState({ lat: data.coord.lat });
    this.setState({ lon: data.coord.lon });
    const res2 = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );

    const data2 = res2.data;
    const timezone = data2.timezone_offset;
    const hourly = data2.hourly.slice(0, 5);
    const dataWeather = hourly.map((hour) => {
      return {
        hour: new Date(hour.dt * 1000 + timezone * 1000).getHours() - 1,
        temp: hour.temp,
        weather: hour.weather[0].description,
      };
    });

    this.setState({ cards: dataWeather });
  };

  render() {
    return (
      <div className='Weather'>
        <div className='wrapper'>
          <form className='formulario' onSubmit={this.handleSubmit}>
            <label htmlFor='ciudad'>Ciudad: {this.state.ciudad}</label>
            <br />

            <input type='text' id='ciudad' name='ciudad' placeholder='ciudad' />
            <button type='submit'>Comprobar pronóstico</button>
          </form>
          <div className='container'>{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
