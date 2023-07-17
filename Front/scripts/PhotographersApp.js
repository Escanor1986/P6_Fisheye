class PhotographerApp {
  constructor() {
    this.$photographerWrapper = document.querySelector(".photographer_section");
    this.photographersApi = new PhotographersApi(
      "/Front/data/photographers.json"
    );
  }

  async main() {
    // Récupération des données depuis le fichier JSON
    const photographersData = await this.photographersApi.getPhotographers();

    photographersData
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographerWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}

const photographerApp = new PhotographerApp();
photographerApp.main();
