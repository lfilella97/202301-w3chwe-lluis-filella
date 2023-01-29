import Component from "../Component/Component.js";
import type ComponentStructure from "../Component/types";

export class MainPageComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "main-content");
  }

  render() {
    super.render();
    this.domElement.innerHTML = ``;
    return "rendered";
  }
}
