export default class Popup {
    constructor(selector) {
      this._popup = document.querySelector(selector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
  
    }
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keyup', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keyup', this._handleEscClose);
    }
  
    setEventListeners() {
      this._popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__container-close')) {
          this.close();
        }
      });
    }
  }