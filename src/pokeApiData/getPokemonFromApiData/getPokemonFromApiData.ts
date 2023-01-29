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
    id: pokemonId,
    species: { name: pokemonName },
    sprites: { front_default: pokemonImage },
  } = results;
  const pokemon = { pokemonId, pokemonName, pokemonImage };
  return pokemon;
};
