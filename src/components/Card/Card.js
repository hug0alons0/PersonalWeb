import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    let {tarea} = this.props.data
    return (
      <div>
        <p>{tarea}</p>
        <button onClick={this.props.remove}>Borrar tarea</button>
      </div>
    );
  }
}

export default Card;