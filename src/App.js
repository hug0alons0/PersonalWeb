import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { userContext } from "./context/userContext";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ciudad: "madrid",
    };
  }

  setCity = (ciudad) => {
    console.log(ciudad);

    this.setState({ ciudad });
    console.log(this.state.ciudad);
  };

  render() {
    const value = {
      city: this.state.ciudad,
      setCity: this.setCity,
    };

    return (
      <div className='App'>
        <userContext.Provider value={value}>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
          <Footer />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
