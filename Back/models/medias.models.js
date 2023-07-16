const mongoose = require("mongoose");

const schema = mongoose.Schema;

const MediaSchema = schema(
  {
    userId: {
      type: String,
      required: [true, "Un identifiant utilisateur MongoDB est requis"],
    },
    title: { type: String, required: [true, "Un titre de photo est requis"] },
    imageUrl: {
      type: String,
      required: [
        true,
        "L'URL de l'image de la sauce téléchargée par l'utilisateur est requise",
      ],
    },
    date: { type: Date, required: [true, "Une date est requise"] },
    price: { type: Number, required: [true, "Un prix est requis"] },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const Medias = mongoose.model("Sauce", MediaSchema);

module.exports = Medias;
