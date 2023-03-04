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

function createCards() {
  const cards = initialCards.map((item) => {
    return createItemCard(item)
  });
  cardsContainer.append(...cards);
}


function createItemCard(item) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image')
  card.querySelector('.element__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const like = card.querySelector('.element__group-title-like')
  const cardDelete = card.querySelector('.element__group-title-delete')
  const buttonImage = card.querySelector('.element__image-button')

  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });

  cardDelete.addEventListener('click', function (evt) {
    card.remove();
  });

  buttonImage.addEventListener('click', (e) => {
    openPopup(popupImage);
    console.log(e.target);
    imageCard.src = e.target.src
    imageTitle.textContent = e.target.closest('.element').querySelector('.element__title').textContent;
  });
  buttonCloseImagePopup.addEventListener("click", closePopupImage)
  return card;
}

function closePopupImage() {
  closePopup(popupImage);
}

buttonOpenProfilePopup.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
});

buttonCloseProfilePopup.addEventListener("click", () => {
  closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupProfile);
});


buttonOpenPopupAdd.addEventListener("click", () => {
  openPopup(popupMesto);
});

buttonCloseMestoPopup.addEventListener("click", () => {
  closePopup(popupMesto);
});

function openPopup(popup) {
  popup.classList.toggle('popup_opened');
}

function closePopup(popup) {
  popup.classList.toggle('popup_opened');
}

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = titleInput.value
  const link = imageInput.value
  const card = createItemCard({ name: name, link: link });
  closePopup(popupMesto)
  cardsContainer.prepend(card);
});