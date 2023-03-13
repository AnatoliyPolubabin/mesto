const showInputError = (input, formError, inputErrorClass) => {
    input.classList.add(inputErrorClass);
    formError.textContent = input.validationMessage;
  };
  
  const hideInputError = (input, formError, inputErrorClass) => {
    input.classList.remove(inputErrorClass);
    formError.textContent = '';
  };
  
  const disableButton = (button, inactiveButtonClass) => {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  };
  
  const enableButton = (button, inactiveButtonClass) => {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  };
  
  const toggleButtonState = (button, inactiveButtonClass, buttonState) => {
    if (buttonState) {
      disableButton(button, inactiveButtonClass)
    }
    else {
      enableButton(button, inactiveButtonClass)
    }
  }
  
  const checkInputValidity = (input, formError, inputErrorClass) => {  
    if (input.validity.valid) {
      hideInputError(input, formError, inputErrorClass);
    } else {
      showInputError(input, formError, inputErrorClass);
    }
  }
  
  const hasInvalidInput = (inputs) => {
    return inputs.some((input) => !input.validity.valid)
  }
  
  const handleFormInput =(evt, form, inputErrorClass, button, inactiveButtonClass, inputs) => {
    const input=evt.target;
    const formError = form.querySelector(`.input-error-${input.name}`);
    checkInputValidity (input, formError, inputErrorClass);
    const buttonState = hasInvalidInput(inputs);
    toggleButtonState (button, inactiveButtonClass, buttonState);
  }
  
  const handleFormSubmit =(evt) => {
  evt.preventDefault()
  }
  
  const enableValidation = ({
    formSelector, 
    inputSelector, 
    inputErrorClass, 
    submitButtonSelector,
    inactiveButtonClass}) => {
  
    const forms = document.querySelectorAll(formSelector);
    forms.forEach ((form) => {
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);
    form.addEventListener('submit', handleFormSubmit);
    inputs.forEach ((input) => {
      input.addEventListener('input', (evt) => handleFormInput(
        evt, form, inputErrorClass, button, inactiveButtonClass,  inputs))
    });
  });
  }; 
  
  const validationConfig = enableValidation({
    formSelector: 'form',
    inputSelector: '.popup__container-input',
    inputErrorClass: 'popup__container-input_type_error',
    submitButtonSelector: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled'
  });
 