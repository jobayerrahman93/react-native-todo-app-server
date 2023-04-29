import { body } from "express-validator";

//  registation validator
const userRegistationValidator = () => {
  return [
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password length must be minimum 8 length").isLength({
      min: 8,
    }),
    body("name", "Enter a name").exists(),
    body("city", "Enter a city name").exists(),
  ];
};
// login validator
const userLoginValidator = () => {
  return [
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password length must be minimum 8 length").isLength({
      min: 8,
    }),
  ];
};

export { userRegistationValidator, userLoginValidator };
