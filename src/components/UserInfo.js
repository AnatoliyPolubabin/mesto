export default class UserInfo {
    constructor({ nameUserElement, informationElement }) {
        this._nameUserElement = document.querySelector(nameUserElement);
        this._informationElement = document.querySelector(informationElement)
    }

    getUserInfo() {
        console.log(this._nameUserElement)
        return {
            name: this._nameUserElement.textContent,
            link: this._informationElement.textContent,
        }
    }
    setUserInfo({ nameInput, jobInput }) {
        console.log(this._nameUserElement)
        this._nameUserElement.textContent = nameInput;
        this._informationElement.textContent = jobInput;
        console.log(nameInput, jobInput)
    }
}