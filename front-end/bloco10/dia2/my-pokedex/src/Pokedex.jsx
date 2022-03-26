import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[0].id} pokemon={pokemons[0]} />
            </div>
        );
    }
}

export default Pokedex;