const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    vehicleType: {
      type: String,
      required: true,
      enum: [
        "Bike",
        "Scooter",
        "Tata Ace",
        "Pickup",
        "Mini Truck",
        "Truck",
        "Container",
      ],
    },

    goodsType: {
      type: String,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

    pickupAddress: {
      type: String,
      required: true,
    },

    dropAddress: {
      type: String,
      required: true,
    },

    distance: {
      type: Number,
      required: true,
    },

    estimatedFare: {
      type: Number,
      required: true,
    },

    finalFare: {
      type: Number,
      default: 0,
    },

    bookingStatus: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Driver Assigned",
        "Pickup",
        "In Transit",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    scheduledDate: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);