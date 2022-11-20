import { React } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import "./styles.css";

function TypeItem(props) {
  return (
    <div className="pokemon-item">
      <div
        className="background"
        style={{ backgroundColor: props.primaryColor }}
      ></div>
      <div className="content-wrapper">
        <img
          className="pokemon-img"
          src="/assets/1bulbasaur1600x1200.jpg"
          alt="Foto do Pokémon"
        />
        <p className="pokemon-name">{capitalizeFirstLetter("bulbassaur")}</p>
        <p className="pokemon-number">#001</p>
      </div>
    </div>
  );
}

export default TypeItem;
