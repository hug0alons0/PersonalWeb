import React, { Component } from 'react';
import './List.css';
import Card from '../Card/Card'
import data from '../../data.json'
import { v4 as uuidv4 } from 'uuid';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards:data
    };
  }

  addCard = (card)=>{
    // let name = prompt("Introduce nombre");
    // let price = prompt("Introduce precio")
    // let proveedor = prompt("Introduce proveedor")
    // this.setState/*Modifica el estado*/ (card)
    this.setState({cards:[...this.state.cards, card]})
  }

  handleSubmit = (e)=>{
    e.preventDefault();

    let tarea = e.target.elements.tarea.value
    this.addCard({tarea});
    e.target.reset();
}


  renderCards = () => this.state.cards.map((card,i)=> <Card data={card} key={uuidv4()} remove={()=>this.removeCard(i)}/>)


  removeAllCards = () => this.setState({cards:[]})

  removeCard = (key) => {
    let filterCards = this.state.cards.filter((card, i)=> key !== i)
    this.setState({cards:filterCards})
  }

  resetCards = () => {
    this.setState({cards:data})
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="tarea">Tarea:</label><br/>
          <input type="text" id="tarea" name="tarea" placeholder="tarea"/><br/><br/>

          <input type="submit" value="ADD"/>
          </form>

        {this.renderCards()}

        <button onClick={this.removeAllCards}>Borrar todas las tareas</button>
        <button onClick={this.resetCards}>Resetear las tareas</button>
      </div>
    );
  }
}

export default List;