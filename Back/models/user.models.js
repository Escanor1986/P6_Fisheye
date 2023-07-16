const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const schema = mongoose.Schema;

const userIdSchema = schema(
  {
    email: {
      type: String,
      required: [true, "Un Email unique est requis"],
      unique: true,
    },
    password: { type: String, required: [true, "Un mot de passe est requis"] },
    bcryptPassword: {
      type: String,
      required: [true, "Un second mot de passe est requis"],
    },
    name: { type: String, required: [true, "Un nom est requis"] },
    city: { type: String, required: [true, "une ville esrt requise"] },
    country: { type: String, required: [true, "un pays est requis"] },
    tagline: { type: String, required: [true, "une description est requise"] },
    portrait: {
      type: String,
      required: [true, "Une photo de profil est requise"],
    },
  },
  {
    timestamps: true,
  }
);

userIdSchema.plugin(uniqueValidator);
const User = mongoose.model("UserId", userIdSchema);
module.exports = User;
