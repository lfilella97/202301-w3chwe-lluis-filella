import { getPokeApiData } from "../getPokeApiData/getPokeApiData.js";
import { getPokemonFromApiData } from "../getPokemonFromApiData/getPokemonFromApiData.js";
import {
  keyLimit,
  keyOffSet,
  pokemonsFrom,
  pokemonsTo,
  urlApi,
} from "../urlApi/urlApi.js";

export const fromApiRequestToPokedexDataList = async () => {
  const pokemonList = await getPokeApiData(
    urlApi + keyOffSet + pokemonsFrom + keyLimit + pokemonsTo
  );
  const pokedexData = [];
  for await (const pokemonInfo of pokemonList) {
    const pokemon = await getPokemonFromApiData(pokemonInfo.url);
    pokedexData.push(pokemon);
  }

  return pokedexData;
};
