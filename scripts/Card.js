class Card {
    static _template = document.querySelector("#element").content;
  
      constructor({text, image, clickNameHandler, likeBtnClickHandler}, selectors) {
        this._text = text;
        this._image = image;
        this._clickNameHandler = clickNameHandler;
        this._likeBtnClickHandler = likeBtnClickHandler;
        this._selectors = selectors;
  
        this._buttonDeleteHandle = this._buttonDeleteHandle.bind(this);
      };
  
      _getCardTemplate () {
        this._item = Card._template.querySelector(this._selectors.card).cloneNode(true);
        return this._item;
      }
      createItemCard() {
        this._getCardTemplate ();
        const cardImage = this._item.querySelector(this._selectors.cardImage);
        const cardTitle = this._item.querySelector(this._selectors.title);
  
        cardTitle.textContent = this._text;
        cardImage.src = this._image;
        cardImage.alt= this._text;
        this._setEventListeners();
        return this._item;
      }
  
      _setEventListeners() {
        
        const buttonLike =  this._item.querySelector(this._selectors.buttonLike);
        const buttonDeleteCard =  this._item.querySelector(this._selectors.buttonDeleteCard);
        const buttonImage =  this._item.querySelector(this._selectors.buttonImage);
        
        buttonDeleteCard.addEventListener('click', this._buttonDeleteHandle);
  
        buttonLike.addEventListener('click', 
          this._likeBtnClickHandler);
    
        buttonImage.addEventListener('click', 
          this._clickNameHandler);
      }
  
      _buttonDeleteHandle() {
        this._item.remove();
      };
  }
  export default Card;