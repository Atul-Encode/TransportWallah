const vehicleService = require("../services/vehicleService");

const createVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.createVehicle(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      message: "Vehicle Added Successfully",
      vehicle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createVehicle,
};