const Booking = require("../models/Booking");
const calculateFare = require("../utils/calculateFare");

const createBooking = async (bookingData, customerId) => {
  const fare = calculateFare(
    bookingData.vehicleType,
    bookingData.distance,
    bookingData.weight
  );

  const booking = await Booking.create({
    customer: customerId,
    vehicleType: bookingData.vehicleType,
    goodsType: bookingData.goodsType,
    weight: bookingData.weight,
    pickupAddress: bookingData.pickupAddress,
    dropAddress: bookingData.dropAddress,
    distance: bookingData.distance,
    estimatedFare: fare,
    scheduledDate: bookingData.scheduledDate,
    notes: bookingData.notes,
  });

  return booking;
};

module.exports = {
  createBooking,
};