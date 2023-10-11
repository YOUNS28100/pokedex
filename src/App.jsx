import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex(index + 1);
  const previous = () => setIndex(index - 1);

  if (index == 0) {
    return (
      <>
        <PokemonCard
          imgSrc={pokemonList[index].imgSrc}
          name={pokemonList[index].name}
        />
        <button onClick={next}>Suivant</button>
      </>
    );
  } else if (index == pokemonList.length - 1) {
    return (
      <>
        <PokemonCard
          imgSrc={pokemonList[index].imgSrc}
          name={pokemonList[index].name}
        />
        <button onClick={previous}>Précédent</button>
      </>
    );
  } else {
    return (
      <>
        <PokemonCard
          imgSrc={pokemonList[index].imgSrc}
          name={pokemonList[index].name}
        />
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
      </>
    );
  }
}

export default App;
