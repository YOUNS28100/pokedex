import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";

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
  useEffect(() => {
    alert("Hello Pokemon Trainer ! :)");
  }, []);
  const [index, setIndex] = useState(0);

  return (
    <>
      <PokemonCard
        imgSrc={pokemonList[index].imgSrc}
        name={pokemonList[index].name}
      />
      <NavBar setIndex={setIndex} name={pokemonList.name} data={pokemonList} />
    </>
  );
}

export default App;
