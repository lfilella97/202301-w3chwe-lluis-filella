export interface PokemonListOfBasicCardInfoStructure {
  id: number;
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
}

export interface PokemonStructure {
  pokemonId: number;
  pokemonName: string;
  pokemonImage: string;
}
