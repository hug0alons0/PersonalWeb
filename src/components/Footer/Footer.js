import React, { Component } from "react";
import "./Footer.css";
import { userContext } from "../../context/userContext";
import axios from "axios";

class Footer extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);
    this.state = {
      ciudad: "madrid",
      lat: "",
      lon: "",
      current: {},
    };
  }

  componentDidMount = async () => {
    const userCont = this.context;
    const ciudad = userCont.city;
    await this.setState({ ciudad });
    console.log(this.state.ciudad);

    this.cargarDatosTiempo(this.state.ciudad);
  };

  componentDidUpdate = async () => {
    const userCont = this.context;
    const ciudad = userCont.city;

    if (this.state.ciudad !== ciudad) {
      await this.setState({ ciudad });
      this.cargarDatosTiempo(this.state.ciudad);
    }
  };

  cargarDatosTiempo = async (ciudad) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = res.data;
    const timezone = data.timezone;
    const dataWeather = {
      hour: new Date(data.dt * 1000 + timezone * 1000).getHours() - 2,
      temp: data.main.temp,
      weather: data.weather[0].description,
    };

    this.setState({ current: dataWeather });
  };

  render() {
    let { hour, temp, weather } = this.state.current;
    return (
      <div className='Footer'>
        <div>{hour}:00</div>
        <div>{temp}ºC</div>
        <div>{weather}</div>
      </div>
    );
  }
}

export default Footer;
