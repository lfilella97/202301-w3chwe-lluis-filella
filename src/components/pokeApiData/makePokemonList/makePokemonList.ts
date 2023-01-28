import { getPokemonsData } from "../getPokemonsData/getPokemonsData.js";
import type { PokemonsListStructure } from "../getPokemonsData/types";
import { keyApi, urlApi } from "../urlApi/urlApi.js";

export const pokeList = (async (): Promise<PokemonsListStructure[]> => {
  const pokemonData = await getPokemonsData(urlApi + keyApi);
  const { results } = pokemonData;
  return results;
})();
