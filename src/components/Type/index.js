import { React, useEffect, useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import TypeItem from "../TypeItem";
import "./styles.css";
const Pokedex = require("pokeapi-js-wrapper");

function Type(props) {
  const [pokemonNamesAndNumbers, setPokemonNamesAndNumbers] = useState([]);

  async function getPokemonNamesAndNumbers(type) {
    const typePokemons = await new Pokedex.Pokedex().getTypeByName(type);
    const typePokemonsNamesAndNumbers = typePokemons.pokemon.map((el) => {
      const url = el.pokemon.url.split("https://pokeapi.co/api/v2/pokemon/");
      const number = url[1].slice(0, -1);
      return [el.pokemon.name, number];
    });
    return typePokemonsNamesAndNumbers;
  }

  useEffect(() => {
    getPokemonNamesAndNumbers(props.type).then(setPokemonNamesAndNumbers);
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
        {pokemonNamesAndNumbers.slice(0, 4).map((el, i) => {
          const pokemonName = el[0];
          const pokemonNumber = el[1];
          return (
            <TypeItem
              key={pokemonName + i}
              primaryColor={props.primaryColor}
              name={pokemonName}
              number={pokemonNumber}
            />
          );
        })}
        {pokemonNamesAndNumbers.length > 4 ? (
          <button className="button" onClick={console.log("Click!")}>
            +
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Type;
