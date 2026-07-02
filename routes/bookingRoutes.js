const express = require("express");

const router = express.Router();

const { createBooking } = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

const validate = require("../middleware/validationMiddleware");

const {
  createBookingValidation,
} = require("../validators/bookingValidator");

router.post(
  "/",
  protect,
  createBookingValidation,
  validate,
  createBooking
);

module.exports = router;