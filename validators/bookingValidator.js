const { body } = require("express-validator");

exports.createBookingValidation = [
  body("vehicleType").notEmpty().withMessage("Vehicle Type is required"),

  body("goodsType").notEmpty().withMessage("Goods Type is required"),

  body("weight").isNumeric().withMessage("Weight must be numeric"),

  body("pickupAddress")
    .notEmpty()
    .withMessage("Pickup Address is required"),

  body("dropAddress")
    .notEmpty()
    .withMessage("Drop Address is required"),

  body("distance").isNumeric().withMessage("Distance must be numeric"),

  body("scheduledDate")
    .notEmpty()
    .withMessage("Scheduled Date is required"),
];