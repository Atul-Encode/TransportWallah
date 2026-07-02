const express = require("express");

const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
  updateBooking,
} = require("../controllers/bookingController");

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

router.get("/my", protect, getMyBookings);

router.get("/:id", protect, getBookingById);

router.delete("/:id", protect, cancelBooking);

router.put("/:id", protect, updateBooking);


module.exports = router;