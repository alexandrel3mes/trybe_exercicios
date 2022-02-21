import React, { Component } from "react";
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const { pokemons: {name, type, image, averageWeight:{ value, measurementUnit}}} = this.props;

    return (
      <div className="pokemon">
        <p> {name} </p>
        <p> {type} </p>
        <p> Average weight: {value}{measurementUnit} </p>
        <img className="images" src={image} alt={name}></img>
      </div>
    );
  }
}

export default Pokemon;