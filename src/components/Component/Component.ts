import type ComponentStructure from "./types.js";

class Component implements ComponentStructure {
  domElement: Element;
  parentElement: Element;
  constructor(parentElement: Element, className: string, tag = "div") {
    this.domElement = document.createElement(tag);
    this.parentElement = parentElement;
    this.domElement.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
