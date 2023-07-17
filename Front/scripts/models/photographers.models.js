class Photographer {
  constructor(photographer) {
    this._name = photographer.name;
    this._id = photographer.id;
    this._city = photographer.city;
    this._country = photographer.country;
    this._tagline = photographer.tagline;
    this._portrait = photographer.portrait;
    this._price = photographer.price;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get portrait() {
    return `/Front/assets/photographers/${this._portrait}`;
  }

  get price() {
    return this._price;
  }
}
