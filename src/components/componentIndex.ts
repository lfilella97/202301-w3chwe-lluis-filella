import { HeaderComponent } from "./HeaderComponent/HeaderComponent.js";
import { MainPageComponent } from "./MainPageComponent/MainPageComponent.js";

export const renderApp = () => {
  const container = document.querySelector(".root");

  const header = new HeaderComponent(container);

  header.render();

  const mainContent = new MainPageComponent(container);
  mainContent.render();
  return mainContent.domElement;
};
