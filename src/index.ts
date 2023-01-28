import { pokeList } from "./components/pokeApiData/makePokemonList/makePokemonList.js";
(async () => {
  console.log(await pokeList);
})();
