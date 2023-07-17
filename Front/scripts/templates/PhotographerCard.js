class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_card");

    const photographerCard = `
      <div class="photographer_image_wrapper">
        <img class="photographer_image" src="${this._photographer.portrait}" alt="${this._photographer.name}">
      </div>
      <h2 class="photographer_name">${this._photographer.name}</h2>
      <p class="photographer_location">${this._photographer.city}, ${this._photographer.country}</p>
      <p class="photographer_tagline">${this._photographer.tagline}</p>
      <p class="photographer_price">$${this._photographer.price} / jour</p>
  `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
