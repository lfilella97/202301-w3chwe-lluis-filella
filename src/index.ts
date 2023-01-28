import { urlApi } from "./components/pokeApiData/urlApi/urlApi.js";
import { getPokemonsData } from "./components/pokeApiData/getPokemonsData/getPokemonsData.js";

const pokeList = (async () => {
  await getPokemonsData(urlApi);
})();
