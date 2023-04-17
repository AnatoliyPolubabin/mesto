import Card from "./Card.js";
import {initialCards, config} from "./constants.js";
import FormValidator from "./FormValidator.js";

const popupProfile = document.querySelector('.popup-profile');
const popupMesto = document.querySelector('.popup-mesto');
const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile-info__title');
const subtitle = document.querySelector('.profile-info__subtitle');
const nameInput = popupProfile.querySelector('.popup__container-input_type_name');
const jobInput = popupProfile.querySelector('.popup__container-input_type_job');
const buttonCloseProfilePopup = popupProfile.querySelector('.popup__container-close_profile');
const buttonCloseMestoPopup = popupMesto.querySelector('.popup__container-close_mesto');
const formElementProfile = document.querySelector('.popup__container');
const formAddCard = document.querySelector('.popup-mesto__container-card');
const popupImage = document.querySelector('.popup-images');
const cardsContainer = document.querySelector('.elements');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const mestoForm = document.querySelector('.form-mesto');
const buttonCloseImagePopup = document.querySelector('.popup__container-close-images');
const imageCard = popupImage.querySelector('.popup__image');
const formProfile = document.querySelector('.form');
const imageTitle = popupImage.querySelector('.popup__image-title')



const selectors = {
  template: '#element',
  card: '.element',
  cardImage: '.element__image',
  title: '.element__title',
  buttonLike: '.element__group-title-like',
  buttonDeleteCard: '.element__group-title-delete',
  buttonImage: '.element__image-button'
}

function createCard(text,image) {
  const card = new Card ({text, image,
    likeBtnClickHandler: (event) => {
      event.target.classList.toggle('element__group-title-like_active');
      },
    clickNameHandler: (event) => {
      event.preventDefault();
      console.log(event.target);
      openPopup(popupImage);
      imageCard.src = event.target.src
      imageTitle.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
      imageCard.alt = imageTitle.textContent;
      console.log(imageCard.alt);
    }
  }, selectors);
  return card.createItemCard()
}

function addCard(name,link) {
  return cardsContainer.prepend(createCard(name,link));
}

initialCards.forEach((item) => {
  addCard(item.name, item.link)
}); 

//==========================================================
const cardFormValidation = new FormValidator(config, mestoForm);
const profileFormValidation = new FormValidator(config, formProfile);

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();

//==========================================================
function keyHandlerEsc(evt) {
  if (evt.key === "Escape") {
  const formOpen=document.querySelector(".popup_opened")
  closePopup(formOpen);
  }
}

popupMesto.addEventListener("click", (e) => {
  if(e.target===popupMesto || e.target===buttonCloseMestoPopup){
    closePopup(popupMesto);
  }
});

popupProfile.addEventListener("click", (e) => {
  if(e.target===popupProfile || e.target===buttonCloseProfilePopup){
    closePopup(popupProfile);
  }
});

popupImage.addEventListener("click", (e) => {
  if(e.target===popupImage || e.target===buttonCloseImagePopup){
    closePopup(popupImage);
  }
})

buttonOpenProfilePopup.addEventListener("click", () => { 
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  profileFormValidation.resetValidation();
});

formElementProfile.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupProfile);
});

buttonOpenPopupAdd.addEventListener("click", () => { 
  openPopup(popupMesto);
  mestoForm.reset();
  cardFormValidation.resetValidation();
});

function openPopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

formAddCard.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  const name = titleInput.value
  const link = imageInput.value
  const card = addCard(name, link);
  closePopup(popupMesto)
});
