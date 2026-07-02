const Vehicle = require("../models/Vehicle");

const createVehicle = async (vehicleData, ownerId) => {
  const vehicle = await Vehicle.create({
    owner: ownerId,
    vehicleType: vehicleData.vehicleType,
    vehicleNumber: vehicleData.vehicleNumber,
    brand: vehicleData.brand,
    model: vehicleData.model,
    capacity: vehicleData.capacity,
  });

  return vehicle;
};

module.exports = {
  createVehicle,
};