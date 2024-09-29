const User = require("../models/user");
const Address = require("../models/address");

// Controller function to register a user
const registerUser = async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create a new user
    const newUser = await User.create({ name });

    // Add the address for the user
    const newAddress = await Address.create({
      address,
      userId: newUser.id,
    });

    return res.status(201).json({
      message: "User and Address created successfully!!!",
      user: newUser,
      address: newAddress,
    });
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while creating the User and Address.",
    });
  }
};

module.exports = { registerUser };
