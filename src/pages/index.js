import './index.css';
import Card from '../components/Card.js';
import { initialCards, 
  config, 
  selectors,
  nameInput,
  jobInput,
  buttonOpenProfilePopup,
  buttonOpenPopupAdd,
  mestoForm,
  formProfile} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const popupShowImage = new PopupWithImage('.popup-images');
popupShowImage.setEventListeners();


const createCard = (data) => {
  const templateClass = selectors.template;
  const card = new Card(data, templateClass, (name, link) => {
    popupShowImage.open(name, link);
  }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  render: createCard
}, '.elements');

cardList.renderItems();

buttonOpenPopupAdd.addEventListener("click", () => {
  cardPopup.open();
  cardFormValidation.resetValidation();
});

const cardPopup = new PopupWithForm('.popup-mesto', (item) => {
  const value = { name: item.nameMesto, link: item.linkPicture };
  cardList.addItem(createCard(value, selectors.template));
  cardPopup.close();
});

cardPopup.setEventListeners();

//==============================================================================

const userInfo = new UserInfo({ nameUserElement: '.profile-info__title', informationElement: '.profile-info__subtitle' });

const popupProfileForm = new PopupWithForm('.popup-profile', (value) => {
  console.log(value)
  userInfo.setUserInfo(value)
});

popupProfileForm.setEventListeners();

buttonOpenProfilePopup.addEventListener("click", () => {
  profileFormValidation.resetValidation();
  profileFormValidation.enableButton();
  popupProfileForm.open();
  const { name, link } = userInfo.getUserInfo();
  console.log(name, link)
  nameInput.value = name;
  jobInput.value = link;
});

//==========================================================


const cardFormValidation = new FormValidator(config,  mestoForm);
const profileFormValidation = new FormValidator(config, formProfile);

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();
