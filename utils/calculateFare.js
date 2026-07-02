const calculateFare = (vehicleType, distance, weight) => {
  let baseFare = 0;
  let perKm = 0;
  let weightCharge = 0;

  switch (vehicleType) {
    case "Bike":
      baseFare = 40;
      perKm = 8;
      break;

    case "Scooter":
      baseFare = 50;
      perKm = 9;
      break;

    case "Tata Ace":
      baseFare = 150;
      perKm = 18;
      break;

    case "Pickup":
      baseFare = 250;
      perKm = 22;
      break;

    case "Mini Truck":
      baseFare = 400;
      perKm = 30;
      break;

    case "Truck":
      baseFare = 800;
      perKm = 50;
      break;

    case "Container":
      baseFare = 1500;
      perKm = 70;
      break;

    default:
      baseFare = 100;
      perKm = 15;
  }

  weightCharge = weight * 2;

  return baseFare + distance * perKm + weightCharge;
};

module.exports = calculateFare;