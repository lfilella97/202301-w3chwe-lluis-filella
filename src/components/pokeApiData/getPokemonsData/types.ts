export interface PokemonsListStructure {
  name: string;
  url: string;
}

export interface PokemonsApiRequestStructure {
  count: number;
  next: undefined;
  previous: string;
  results: PokemonsListStructure[];
}
