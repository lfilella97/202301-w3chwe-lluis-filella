import type { PokemonStructure } from "../../pokeApiData/getPokemonFromApiData/types.js";
import Component from "../Component/Component.js";
import type { CardStructure } from "./types";

export class PokemonCardComponent extends Component implements CardStructure {
  pokemon: PokemonStructure;
  constructor(parentElement: Element) {
    super(parentElement, "pokemonCard", "div");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <img class="card__image" src="${
      this.pokemon.pokemonImage
    }" alt="front view of ${this.pokemon.pokemonName}" width="96" height="96">
<span class="card__id">${0}</span>
<span class="card__name">${this.pokemon.pokemonName}</span>`;
  }
}
