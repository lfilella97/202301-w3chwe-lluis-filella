import type { PokemonStructure } from "../../pokeApiData/getPokemonFromApiData/types";
import type ComponentStructure from "../Component/types";

export interface CardStructure extends ComponentStructure {
  pokemon: PokemonStructure;
}
