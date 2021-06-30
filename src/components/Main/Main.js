import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.css";
import Home from "../Home";
import List from "../List/List";
import Weather from "../Weather";

class Main extends Component {
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
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/todo' component={List} />
          <Route path='/weather' component={Weather} />
        </Switch>
      </div>
    );
  }
}

export default Main;
