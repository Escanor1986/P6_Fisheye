class Api {
  constructor(url) {
    this.url = url;
  }

  async get() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("An error occurred:", error);
      return null;
    }
  }
}

class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const data = await this.get();
    // Vérification des données récupérées
    console.log("Photographers data:", data);
    return data ? data.photographers : [];
  }
}
