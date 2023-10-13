import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";

function NavBar({ setIndex, data }) {
  return (
    <>
      {data.map((pokemon) => (
        <button
          onClick={() => setIndex(data.indexOf(pokemon))}
          key={pokemon.name}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  setIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default NavBar;
