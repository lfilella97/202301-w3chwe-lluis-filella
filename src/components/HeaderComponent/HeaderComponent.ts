import Component from "../Component/Component.js";
import type ComponentStructure from "../Component/types";
import { pokeLogo } from "./svgTitle.js";

export class HeaderComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${pokeLogo} <i class="fa-solid fa-arrow-right"></i>`;
    return "rendered";
  }
}
