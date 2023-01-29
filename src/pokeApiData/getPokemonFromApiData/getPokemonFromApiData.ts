import type {
  PokemonListOfBasicCardInfoStructure,
  PokemonStructure,
} from "./types";

export const getPokemonFromApiData = async (
  pokemonUrl: string
): Promise<PokemonStructure> => {
  const response = await fetch(pokemonUrl);
  const results =
    (await response.json()) as PokemonListOfBasicCardInfoStructure;

  const {
    species: { name: pokemonName },
    sprites: { front_default: pokemonImage },
  } = results;
  const pokemon = { pokemonName, pokemonImage };
  return pokemon;
};
