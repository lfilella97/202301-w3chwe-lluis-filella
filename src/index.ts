import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";

const container = document.querySelector(".root");

const header = new HeaderComponent(container);
header.render();
