import type { PokemonsApiRequestStructure } from "./types";

export const getPokemonsData = async (
  urlApi: string
): Promise<PokemonsApiRequestStructure> => {
  const response = await fetch(urlApi);
  const results = (await response.json()) as PokemonsApiRequestStructure;
  return results;
};
