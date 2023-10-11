import PropTypes from "prop-types";

function PokemonCard({ imgSrc, name }) {
  if (imgSrc == undefined) {
    return (
      <figure>
        <p>???</p>
        <figcaption>{name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <img src={imgSrc} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
