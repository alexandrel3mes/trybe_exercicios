import Pokemon from "./Pokemon";
import React, { Component } from "react";
import pokemons from "./data";
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} pokemons={pokemon}/>
      ))
    )
  }
}

export default Pokedex