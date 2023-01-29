import { getPokeApiData } from "../getPokeApiData/getPokeApiData.js";
import { getPokemonFromApiData } from "../getPokemonFromApiData/getPokemonFromApiData.js";
import { keyLimit, keyOffSet, urlApi } from "../urlApi/urlApi.js";

const fromPokemon = `1`;
const toPokemon = `20`;

export const fromApiRequestToPokedexDataList = async () => {
  const pokemonList = await getPokeApiData(
    urlApi + keyOffSet + fromPokemon + keyLimit + toPokemon
  );
  const pokedexData = [];
  for await (const pokemonInfo of pokemonList) {
    const pokemon = await getPokemonFromApiData(pokemonInfo.url);
    pokedexData.push(pokemon);
  }

  return pokedexData;
};
