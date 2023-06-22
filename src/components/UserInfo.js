export default class UserInfo {
    constructor({ nameUserElement, informationElement, avatarUserElement }) {
        this._nameUserElement = document.querySelector(nameUserElement);
        this._informationElement = document.querySelector(informationElement);
        this._avatarUserElement = document.querySelector(avatarUserElement);
    }

    getUserInfo() {
        console.log(this._nameUserElement)
        return {
            name: this._nameUserElement.textContent,
            about: this._informationElement.textContent,
        }
    }
    getUserId() {
        return this._id;
    }
    setUserInfo({ name, about }) {
        this._nameUserElement.textContent = name;
        this._informationElement.textContent = about;
    }

    setUserId(id) {
        this._id = id;
    }

    setUserAvatar({ avatar }) {
        this._avatarUserElement.src = avatar;
        console.log(this._avatarUserElement)
        console.log(avatar)
    }
}