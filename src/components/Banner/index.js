import { React } from "react";
import "./styles.css";

function Banner() {
  return (
    <header className="banner">
			<div className="logo-search-wrapper">
				<img className="logo" src="/assets/logo.svg" alt="Logo" />
				<div className="search-wrapper">
					<p className="input-label">Search for a Pokémon by name or number</p>
					<div className="search-bar">
						<input className="input-search" type="search"></input>
						<img className="search-icon" src="/assets/search-icon.svg" alt="Botão de pesquisar" />
					</div>
				</div>
			</div>
      <img
        className="pokemons-img"
        src="/assets/pokemons-banner.svg"
        alt="Logo"
      />
    </header>
  );
}

export default Banner;
