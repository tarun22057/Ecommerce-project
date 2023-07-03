const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");

// Function to register a user
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is a sample id",
        url: "placeholderurl",
      },
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    // Handle MongoDB validation errors
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      const errorMessage = `Invalid input data. ${message.join(" ")}`;
      return next(new ErrorHandler(errorMessage, 400));
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      const errorMessage = `Duplicate field value entered`;
      return next(new ErrorHandler(errorMessage, 400));
    }

    // Handle other errors
    next(error);
  }
};

module.exports = { registerUser };
