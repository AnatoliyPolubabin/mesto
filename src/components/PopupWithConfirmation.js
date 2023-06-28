import Popup from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    constructor(selector) {
        super(selector);
        this._deleteButton = this._popup.querySelector('.form');
    }

    setSubmitCallback(handleSubmit) {
        this._handlerSubmitForm = handleSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._deleteButton.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handlerSubmitForm();
        });
    }
}