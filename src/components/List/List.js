import React, { Component } from 'react';
import './List.css';
import Card from '../Card/Card'
import data from '../../data.json'

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards:data
    };
  }

  renderCards = () => this.state.cards.map((card,i)=> <Card data={card} key={i} remove={()=>this.removeCard(i)}/>)

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
        {this.renderCards()}

        <button onClick={this.removeAllCards}>Borrar todas las tareas</button>
        <button onClick={this.resetCards}>Resetear las tareas</button>
      </div>
    );
  }
}

export default List;