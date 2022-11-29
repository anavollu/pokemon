import { React } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

function ListByTypes() {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state.type} Type list</h1>
      {location.state.pokemons.map((el) => (
        <p>
          #{el.number} {el.name}
        </p>
      ))}
    </div>
  );
}

export default ListByTypes;
