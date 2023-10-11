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

export default PokemonCard;
