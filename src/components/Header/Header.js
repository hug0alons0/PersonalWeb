import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <ul className='Header'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/todo'>Tareas</Link>
        </li>
        <li>
          <Link to='/weather'>Weather</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
