import { React, useEffect, useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import TypeItem from "../TypeItem";
import "./styles.css";
const Pokedex = require("pokeapi-js-wrapper");

function Type(props) {
  const [pokemonNames, setPokemonNames] = useState([]);

  async function getPokemonNames(type) {
    const icePokemons = await new Pokedex.Pokedex().getTypeByName(type);
    const icePokemonsNames = icePokemons.pokemon.map((el) => el.pokemon.name);
    return icePokemonsNames;
  }

  useEffect(() => {
    getPokemonNames(props.type).then(setPokemonNames);
  }, [props.type]);

  return (
    <div
      className="type-wrapper"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <p className="type-title">{capitalizeFirstLetter(props.type)}</p>
      <div
        className="title-line"
        style={{
          borderColor: props.primaryColor,
        }}
      ></div>
      <div className="pokemon-list">
        {pokemonNames.slice(0, 6).map((pokemonName, i) => (
          <TypeItem
            key={pokemonName + i}
            primaryColor={props.primaryColor}
            name={pokemonName}
          />
        ))}
      </div>
      {pokemonNames.length > 5 ? "click here to see more" : ""}
    </div>
  );
}

export default Type;
