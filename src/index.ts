import { MainPageComponent } from "./components/MainPageComponent/MainPageComponent.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";

const container = document.querySelector(".root");

const header = new HeaderComponent(container);

header.render();

const mainContent = new MainPageComponent(container);
mainContent.render();
