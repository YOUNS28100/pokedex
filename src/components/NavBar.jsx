import PropTypes from "prop-types";

function NavBar({ setIndex, index, pokemonListLength }) {
  const next = () => setIndex(index + 1);
  const previous = () => setIndex(index - 1);

  if (index == 0) {
    return (
      <>
        <button onClick={next}>Suivant</button>
      </>
    );
  } else if (index == pokemonListLength - 1) {
    return (
      <>
        <button onClick={previous}>Précédent</button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
      </>
    );
  }
}
NavBar.propTypes = {
  setIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
};

export default NavBar;
