import { selectors } from '../utils/constants.js'
class Card {

  constructor(data, templateSelector, handleCardClick, userId, like, dislike, handleDeleteButtonClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._myId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._templateSelector = templateSelector;
    this._like = like;
    this._dislike = dislike;



  };

  _getCardTemplate() {
    const item = document.querySelector(this._templateSelector).content.querySelector(selectors.card).cloneNode(true);
    return item;
  }
  getCardId() {
    return this._id;
  }
 
  generateCard() {
    this._element = this._getCardTemplate();
    this._cardImage = this._element.querySelector(selectors.cardImage);
    this._cardTitle = this._element.querySelector(selectors.title);
    this._countLike = this._element.querySelector(selectors.countLike);
    this._buttonLike = this._element.querySelector(selectors.buttonLike);
    this._countLike.textContent = this._likes.length;
    this._setEventListeners();
    this._deleteButtonHandle();
    this._userLiked();

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
  _userLiked() {
    this._likes.forEach((elementId) => {
      if (elementId._id === this._userId) {
        this._buttonLike.classList.add('element__group-title-like_active');
      } else {
        this._buttonLike.classList.remove('element__group-title-like_active');
      }
    })
  }

  _setEventListeners() {

    this._buttonLike.addEventListener('click', () => {
      if (this._buttonLike.classList.contains('element__group-title-like_active')) {
        this._dislike(this._id);
      } else {
        this._like(this._id);
      }
    });
    this._buttonDeleteCard = this._element.querySelector(selectors.buttonDeleteCard);

    this._buttonDeleteCard.addEventListener('click', () => {
      this._handleDeleteButtonClick();
    });

    const buttonImage = this._element.querySelector(selectors.buttonImage);

    buttonImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _deleteButtonHandle() {
    if (this._userId !== this._myId) {
      this._buttonDeleteCard.remove();
    }
  };
  deleteElement() {
    this._element.remove()
  }
  handleLikeCard(data) {
    this._likes = data.likes;
    this._countLike.textContent = this._likes.length;
    this._buttonLike.classList.toggle('element__group-title-like_active');
  }
}
export default Card;