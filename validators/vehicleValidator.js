const { body } = require("express-validator");

exports.createVehicleValidation = [
  body("vehicleType")
    .notEmpty()
    .withMessage("Vehicle Type is required"),

  body("vehicleNumber")
    .notEmpty()
    .withMessage("Vehicle Number is required"),

  body("brand")
    .notEmpty()
    .withMessage("Brand is required"),

  body("model")
    .notEmpty()
    .withMessage("Model is required"),

  body("capacity")
    .isNumeric()
    .withMessage("Capacity must be numeric"),
];