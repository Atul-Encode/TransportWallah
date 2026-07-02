const { body } = require("express-validator");

exports.registerValidation = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid Email is required"),

  body("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be 10 digits"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

exports.loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Valid Email is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];