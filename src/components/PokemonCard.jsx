import PropTypes from "prop-types";

function PokemonCard({ name, imgSrc }) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
