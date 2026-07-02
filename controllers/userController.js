const getAllUsers = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Users",
  });
};

module.exports = {
  getAllUsers,
};