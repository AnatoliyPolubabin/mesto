const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupMesto = document.querySelector('.popup-mesto');
const editButton = document.querySelector('.profile-info__edit-button');
const addButton = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile-info__title');
const subtitle = document.querySelector('.profile-info__subtitle');
const nameInput = popupProfile.querySelector('.popup__container-input_type_name');
const jobInput = popupProfile.querySelector('.popup__container-input_type_job');
const closeProfile = popupProfile.querySelector('.popup__container-close_profile');
const closeMesto = popupMesto.querySelector('.popup__container-close_mesto');
const formElement = document.querySelector('.form');
const popupImages = document.querySelector('.popup-images');
const Template = document.querySelector('#element').content; 
const container = document.querySelector('.elements');
const titleMesto = document.querySelector('.element__title');
const imageMesto = document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const formMesto = document.querySelector('.form-mesto');
const closeImages = document.querySelector('.popup__container-close-images');
const imageCard=popupImages.querySelector('.popup__image');
const imageTitle=popupImages.querySelector('.popup__image-title')

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
  const cards= initialCards.map((item) => {
    return  create(item)
});
container.append(...cards);
}

function create(item) {
  const card = Template.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt=item.name;
  
  const like =  card.querySelector('.element__group-title-like')
  const delete_card =  card.querySelector('.element__group-title-delete')
  const image_button =  card.querySelector('.element__image-button')
  
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });

  delete_card.addEventListener('click', function (evt) {
    card.remove();
  });

  image_button.addEventListener('click', (e) => {
    openPopup(popupImages);
    console.log(e.target);
    imageCard.src = e.target.src
    imageTitle.textContent = e.target.closest('.element').querySelector('.element__title').textContent;
  });
  closeImages.addEventListener("click", closePopupImages)
  return card;
}

function closePopupImages() {
  closePopup(popupImages);
}

editButton.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
});

closeProfile.addEventListener("click", () => { 
  closePopup(popupProfile);
});

formElement.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupProfile);
});


addButton.addEventListener("click", () => { 
  openPopup(popupMesto);
  formMesto.reset();
});

closeMesto.addEventListener("click", () => { 
  closePopup(popupMesto);
});

function openPopup(popup) { 
  popup.classList.toggle('popup_opened');
}

function closePopup(popup) { 
  popup.classList.toggle('popup_opened');
}

formElementMesto.addEventListener('click', (evt) => { 
  evt.preventDefault();
  const name = titleInput.value
  const link = imageInput.value
  const card = create({name:name, link:link});
  closePopup(popupMesto)
  container.prepend(card);
});
