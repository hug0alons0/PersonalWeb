import React, { Component } from "react";
import "./List.scss";
import Card from "../Card/Card";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      input: "",
      addCard: false,
      error: false,
    };
  }

  addCard = (card) => {
    // let name = prompt("Introduce nombre");
    // let price = prompt("Introduce precio")
    // let proveedor = prompt("Introduce proveedor")
    // this.setState/*Modifica el estado*/ (card)
    this.setState({ cards: [...this.state.cards, card] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let tarea = e.target.elements.tarea.value;

    if (tarea.length > 5) {
      this.addCard({ tarea });
      e.target.reset();
      this.setState({ input: "" });
      this.setState({ addCard: true });
    } else {
      this.setState({ error: true });
    }
  };

  renderCards = () =>
    this.state.cards.map((card, i) => (
      <Card data={card} key={uuidv4()} remove={() => this.removeCard(i)} />
    ));

  removeAllCards = () => this.setState({ cards: [] });

  removeCard = (key) => {
    let filterCards = this.state.cards.filter((card, i) => key !== i);
    this.setState({ cards: filterCards });
  };

  resetCards = () => {
    this.setState({ cards: data });
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ input: "" });
      event.target.value = "";
    }, 20000);
  };

  mostrarBoton = () => {
    if (this.state.input !== "") {
      return <input type='submit' value='ADD' />;
    } else {
      return "";
    }
  };

  componentDidMount() {
    this.setState({ cards: data });
  }

  mostrarMensaje = () => {
    if (this.state.addCard) {
      setTimeout(() => {
        this.setState({ addCard: false });
      }, 5000);
      return <h2>Tarea añadida</h2>;
    } else {
      return "";
    }
  };

  mostrarError = () => {
    if (this.state.error) {
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
      return <h2>La tarea debe de tener 6 caracteres como mínimo</h2>;
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className='List'>
        <div className='wrapper'>
          <form className='formulario' onSubmit={this.handleSubmit}>
            <label htmlFor='tarea'>Tarea:</label>
            <br />

            <input
              type='text'
              id='tarea'
              name='tarea'
              placeholder='tarea'
              onChange={this.handleChange}
            />
            <br />
            {this.mostrarBoton()}
          </form>
          {this.mostrarMensaje()}
          {this.mostrarError()}
          <div className='container'>{this.renderCards()}</div>
          <button onClick={this.removeAllCards}>Borrar todas las tareas</button>
          <button onClick={this.resetCards}>Resetear las tareas</button>
        </div>
      </div>
    );
  }
}

export default List;

// let apiKey = "d29114ce0d3d754700c440e4af5cd481";

// aemet
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFubWFudWVsYmFyY2lhZ2FyY2lhQGdtYWlsLmNvbSIsImp0aSI6IjY1ZGRkMWY2LTM4ZTAtNGQ5Mi04YWQ0LTZmZDIxOTRhOGY2NSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjI1MDY5MjE3LCJ1c2VySWQiOiI2NWRkZDFmNi0zOGUwLTRkOTItOGFkNC02ZmQyMTk0YThmNjUiLCJyb2xlIjoiIn0.9gbFJvnmcNVGtl0Q_Avg9LnkSaYggTNqDpv1eX5aMGA
