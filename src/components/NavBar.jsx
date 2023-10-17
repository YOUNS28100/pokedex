import PropTypes from "prop-types";

function NavBar({ setIndex, index, data }) {
  {
    index === 3 ? alert("Pika Pikachu !!!") : "";
  }
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
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default NavBar;
