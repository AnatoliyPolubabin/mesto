import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
    this._formContainerInputs = this._form.querySelectorAll('.popup__container-input');
  }
  _getInputValues() {
    this._values = {};
    this._formContainerInputs.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}