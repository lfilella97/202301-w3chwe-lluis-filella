import type {
  PokemonsApiRequestStructure,
  PokemonsListStructure,
} from "./types";

export const getPokeApiData = async (
  apiCall: string
): Promise<PokemonsListStructure[]> => {
  const response = await fetch(apiCall);
  const resultss = (await response.json()) as PokemonsApiRequestStructure;
  const { results } = resultss;
  return results;
};
