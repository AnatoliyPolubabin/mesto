import { selectors } from '../utils/constants.js'
class Card {

  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  };

  _getCardTemplate() {
    const item = document.querySelector(this._templateSelector).content.querySelector(selectors.card).cloneNode(true);
    return item;
  }
  // ==================================
  generateCard() {
    this._element = this._getCardTemplate();
    this._cardImage = this._element.querySelector(selectors.cardImage);
    this._cardTitle = this._element.querySelector(selectors.title);
    this._setEventListeners();

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
  // ===========
  _setEventListeners() {

    const buttonLike = this._element.querySelector(selectors.buttonLike);

    buttonLike.addEventListener('click', () => {
      buttonLike.classList.toggle('element__group-title-like_active');
    });

    const buttonDeleteCard = this._element.querySelector(selectors.buttonDeleteCard);

    buttonDeleteCard.addEventListener('click', () => {
      console.log(this._element)
      this._deleteButtonHandle();
    });

    const buttonImage = this._element.querySelector(selectors.buttonImage);

    buttonImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _deleteButtonHandle() {
    console.log(this._element)
    this._element.remove()
  };

}
export default Card;