interface ComponentStructure {
  domElement: Element;
  parentElement: Element;

  addListeners?: () => void;
}

export default ComponentStructure;
