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
const cardTemplate = document.querySelector('#element').content;
const cardsContainer = document.querySelector('.elements');
const titleMesto = document.querySelector('.element__title');
const imageMesto = document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const mestoForm = document.querySelector('.form-mesto');
const buttonCloseImagePopup = document.querySelector('.popup__container-close-images');
const imageCard = popupImage.querySelector('.popup__image');
const imageTitle = popupImage.querySelector('.popup__image-title')

const initialCards = [
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

createCards()

function removeValidationErrors (popup) {
  const errors = popup.querySelectorAll(".error")
  errors.forEach((error) => {
    error.textContent = '';
  });
  const inputs = popup.querySelectorAll(".popup__container-input");
  inputs.forEach((input) => {
    input.classList.remove("popup__container-input_type_error");
  });
  }
  
  function enableSubmitButton(button) {
    button.classList.remove("popup__container-button_disabled");
    button.disabled = false;
  }
  
  function disableSubmitButton(button) {
    button.classList.add("popup__container-button_disabled");
    button.disabled = true;
  }

function createCards() {
  const cards = initialCards.map((item) => {
    return createItemCard(item)
  });
  cardsContainer.append(...cards);
}


function createItemCard(item) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt = item.name;
  card.querySelector('.element__title').textContent = item.name;

  const like = card.querySelector('.element__group-title-like')
  const cardDelete = card.querySelector('.element__group-title-delete')
  const buttonImage = card.querySelector('.element__image-button')


  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });

  cardDelete.addEventListener('click', function (evt) {
    card.remove();
  });


  buttonImage.addEventListener('click', function () {
    imageCard.src = item.link;
    imageCard.alt = item.name;
    imageTitle.textContent = item.name;
    openPopup(popupImage);
  });
  return card;
};

function handlerKeyEsc(evt) {
  if (evt.key === "Escape") {
    const openForm = document.querySelector(".popup_opened")
    closePopup(openForm);
  }
}



popupMesto.addEventListener("click", (e) => {
  if (e.target === popupMesto || e.target === buttonCloseMestoPopup) {
    closePopup(popupMesto);
  }
});

popupProfile.addEventListener("click", (e) => {
  if (e.target === popupProfile || e.target === buttonCloseProfilePopup) {
    closePopup(popupProfile);
  }
});

popupImage.addEventListener("click", (e) => {
  if (e.target === popupImage || e.target === buttonCloseImagePopup) {
    closePopup(popupImage);
  }
})

buttonOpenProfilePopup.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
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
  removeValidationErrors(popupMesto);
  disableSubmitButton(formElementMesto);
});


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", handlerKeyEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", handlerKeyEsc);
}

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = titleInput.value
  const link = imageInput.value
  const card = createItemCard({ name: name, link: link });
  cardsContainer.prepend(card);
  closePopup(popupMesto)
});

