import PropTypes from "prop-types";

function PokemonCard({ imgSrc, name }) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
      {name == "Pikachu" ? alert("Pika Pikachu !!!") : ""}
    </figure>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
