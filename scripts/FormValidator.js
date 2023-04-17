class FormValidator {
    constructor (config, formElement){
        this._config = config;
        this._formElement = formElement;
        this._inactiveButtonClass=config.inactiveButtonClass;
        this._submitButtonSelector=config.submitButtonSelector;
        this._inputErrorClass=config.inputErrorClass;

        this._inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._errorClass = Array.from(this._formElement.querySelectorAll(this._config.errorClass));
        this._button =  this._formElement.querySelector(this._submitButtonSelector);
    };

    _disableButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
      };

      _enableButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
      }

      _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton()
          }
        else {
            this._enableButton()
        }
    }
    
    _showInputError (inputError) {
        const formError = this._formElement.querySelector(`.input-error-${inputError.name}`);
        console.log(formError);
        inputError.classList.add(this._inputErrorClass);
        formError.textContent = inputError.validationMessage;
        };

    _hideInputError (inputError) {
        const formError = this._formElement.querySelector(`.input-error-${inputError.name}`);
        inputError.classList.remove(this._inputErrorClass);
        formError.textContent = "";
    };  

    _checkInputValidity (inputError) {  
        if (inputError.validity.valid) {
            this._hideInputError(inputError);
        } else {
            this._showInputError(inputError);
        }
    }
//=====================================

    enableValidation() {
        this._toggleButtonState();
        this._inputs.forEach((inputError) => {
        inputError.addEventListener('input', () => {
            this._checkInputValidity(inputError);
            this._toggleButtonState();
        });
    });
    }

//=============================  

    resetValidation ()  {
    this._toggleButtonState()
    this._errorClass.forEach((error) => {
       error.textContent = '';
    });
    this._inputs.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
    });
      }    

    _hasInvalidInput () {
        return this._inputs.some((inputError) => !inputError.validity.valid)
    }
        
    _handleFormSubmit (evt) {
        evt.preventDefault()
    }
}
export default FormValidator;