export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._inputSelector = config.inputSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._formElement = formElement;

        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._button = this._formElement.querySelector(this._submitButtonSelector);
    };

    _disableButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
    };

    enableButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton()
        }
        else {
            this.enableButton()
        }
    }

    _showInputError(inputError) {
        const formError = this._formElement.querySelector(`.input-error-${inputError.name}`);
        inputError.classList.add(this._inputErrorClass);
        formError.textContent = inputError.validationMessage;
    };

    _hideInputError(inputError) {
        const formError = this._formElement.querySelector(`.input-error-${inputError.name}`);
        inputError.classList.remove(this._inputErrorClass);
        formError.textContent = "";
    };

    _checkInputValidity(inputError) {
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

    resetValidation() {
        this._toggleButtonState()
        this._inputs.forEach((inputError) => {
            this._hideInputError(inputError)
        });
    }

    _hasInvalidInput() {
        return this._inputs.some((inputError) => !inputError.validity.valid)
    }

    _handleFormSubmit(evt) {
        evt.preventDefault()
    }
}