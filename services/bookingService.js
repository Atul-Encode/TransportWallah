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

const getMyBookings = async (customerId) => {
  return await Booking.find({ customer: customerId })
    .populate("customer", "fullName email phone")
    .populate("driver", "fullName phone")
    .sort({ createdAt: -1 });
};

const getBookingById = async (id) => {
  return await Booking.findById(id)
    .populate("customer", "fullName email phone")
    .populate("driver", "fullName phone");
};

const cancelBooking = async (id, customerId) => {
  const booking = await Booking.findOne({
    _id: id,
    customer: customerId,
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  booking.bookingStatus = "Cancelled";

  await booking.save();

  return booking;
};

const updateBooking = async (id, customerId, bookingData) => {
  const booking = await Booking.findOne({
    _id: id,
    customer: customerId,
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  Object.assign(booking, bookingData);

  await booking.save();

  return booking;
};
module.exports = {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
  updateBooking,
};