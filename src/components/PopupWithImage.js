import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._titleImage = this._popup.querySelector('.popup__image-title');
  }

  open(name, image) {
    super.open();
    console.log(`попап ${name}`);
    this._titleImage.textContent = name;
    this._image.src = image;
    this._image.alt = name;
  }
}