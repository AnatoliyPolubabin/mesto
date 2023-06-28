export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const config = ({
  formSelector: 'form',
  inputSelector: '.popup__container-input',
  inputErrorClass: 'popup__container-input_type_error',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  errorClass: '.error'
});

export const selectors = {
  template: '#element',
  card: '.element',
  cardImage: '.element__image',
  title: '.element__title',
  buttonLike: '.element__group-title-like',
  buttonDeleteCard: '.element__group-title-delete',
  buttonImage: '.element__image-button',
  countLike: '.element__group-title-like-number'
}
const popupProfile = document.querySelector('.popup-profile');
export const formAvatar = document.querySelector('.form-avatar');
export const popupAvatarButton = document.querySelector('.profile__avatar-button');
export const nameInput = popupProfile.querySelector('.popup__container-input_type_name');
export const jobInput = popupProfile.querySelector('.popup__container-input_type_job');
export const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');
export const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
export const mestoForm = document.querySelector('.form-mesto');
export const formProfile = document.querySelector('.form');