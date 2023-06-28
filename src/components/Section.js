export default class Section {
    constructor({ items, render }, selector) {
      this._renderItems = items;
      this._render = render;
      this._container = document.querySelector(selector);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
    renderItems() {
      this._renderItems.forEach((item) => {
        const card = this._render(item);
        this.addItem(card);
      });
    }
    setItems(items) {
      this._renderItems = items;
  }
  }