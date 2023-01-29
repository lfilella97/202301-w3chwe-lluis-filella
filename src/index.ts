import { renderApp } from "./components/componentIndex.js";
import { PokemonCardComponent } from "./components/PokemonCardComponent/PokemonCardComponent.js";
import { fromApiRequestToPokedexDataList } from "./pokeApiData/fromApiRequestToPokedexDataList/fromApiRequestToPokedexDataList.js";

const container = renderApp();

(async () => {
  const pokemons = await fromApiRequestToPokedexDataList();

  for await (const pokemon of pokemons) {
    const card = new PokemonCardComponent(container, pokemon);
    card.render();
  }
})();
