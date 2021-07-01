import React, { Component } from "react";
import "./WeatherCard.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { hour, temp, weather } = this.props.data;
    return (
      <div>
        <div>{hour}:00</div>
        <div>{temp}ºC</div>
        <div>{weather}</div>
      </div>
    );
  }
}

export default WeatherCard;
