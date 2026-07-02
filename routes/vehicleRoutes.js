const express = require("express");

const router = express.Router();

const { createVehicle } = require("../controllers/vehicleController");

const { protect } = require("../middleware/authMiddleware");

const validate = require("../middleware/validationMiddleware");

const {
  createVehicleValidation,
} = require("../validators/vehicleValidator");

router.post(
  "/",
  protect,
  createVehicleValidation,
  validate,
  createVehicle
);

module.exports = router;