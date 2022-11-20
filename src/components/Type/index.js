import { React } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import TypeItem from "../TypeItem";
import "./styles.css";

function Type(props) {
  const titleCapitalLetter = capitalizeFirstLetter(props.type);
  return (
    <div
      className="type-wrapper"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <p className="type-title">{titleCapitalLetter}</p>
      <div
        className="title-line"
        style={{
          borderColor: props.primaryColor,
        }}
      ></div>
      <div className="pokemon-list">
        <TypeItem primaryColor={props.primaryColor} />
        <TypeItem primaryColor={props.primaryColor} />
        <TypeItem primaryColor={props.primaryColor} />
        <TypeItem primaryColor={props.primaryColor} />
      </div>
    </div>
  );
}

export default Type;
