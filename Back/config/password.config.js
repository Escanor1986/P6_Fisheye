const passwordValidator = require("password-validator");
const passwordSchema = new passwordValidator();

// Modèle du mot de passe à encodé au signup et au login
// protection contre les attaques par force brute et les attaques par injection de code
passwordSchema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase(1)
  .has()
  .lowercase()
  .has()
  .symbols()
  .has()
  .not()
  .digits()
  .is()
  .not(/[\]()[{}<>@'"\/\\|]/)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf([
    "Passw0rd",
    "Password123",
    "123456789",
    "iLoveYou",
    "Master",
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "123abc",
    "password1",
    "12345",
    "abcdef",
    "123456789",
    "12345678",
    "iloveyou",
    "sunshine",
    "1234567",
    "princess",
    "qwertyuiop",
    "password123",
    "starwars",
    "football",
    "baseball",
    "dragon",
    "monkey",
    "abc123",
    "654321",
    "passw0rd",
    "trustno1",
    "master",
    "superman",
    "hello123",
    "qwerty123",
    "letmein123",
    "welcome123",
    "password1234",
    "password12345",
    "pass1234",
    "pass12345",
    "admin123",
    "admin1234",
    "admin12345",
    "password!",
    "password!!",
    "password123!",
    "password123!!",
    "changeme",
    "test123",
    "testtest",
    "abcd1234",
    "password123456",
    "password123456789",
    "iloveyou123",
    "sunshine123",
    "1234567890",
    "abcdef123",
    "passpass",
    "passwordpassword",
    "password1!",
    "password1!!",
    "qwertyuiop123",
    "123456789a",
    "123456789b",
    "123456789c",
    "123456789d",
    "123456789e",
    "123456789f",
    "123456789g",
    "123456789h",
    "123456789i",
    "123456789j",
    "123456789k",
    "123456789l",
    "123456789m",
    "123456789n",
    "123456789o",
    "123456789p",
    "123456789q",
    "123456789r",
    "123456789s",
    "123456789t",
    "123456789u",
    "123456789v",
    "123456789w",
    "123456789x",
    "123456789y",
    "123456789z",
    "password12345678",
    "password123456789",
    "qwerty123456",
    "12345abcde",
    "passw0rd123",
    "changeme123",
    "test1234",
    "abcd123456",
  ]) // liste noir des valeurs interdites
  .is()
  .not((value, { req, location, path }) => {
    // Vérifie que le mot de passe ne contient pas d'informations sensibles
    const username = req.body.username;
    const email = req.body.email;
    return (
      value.includes(username) ||
      value.includes(email) ||
      value.toLowerCase().includes("password")
    );
  });

// on exporte le Schema password
module.exports = passwordSchema;
