const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check user exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    //salt and hash password
    const salt = await bcrypt.genSalt(10); //10=costfactor
    const hashedPassword = await bcrypt.hash(password, salt);
    //create and save new user
    const newUser = await User.create({
      email: email,
      name: name,
      password: hashedPassword,
    });
    //create json web token(jwt)
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    //return success response
    res.status(200).json({
      message: "User Registered Sucessfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
        createdAt: newUser.createdAt,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
module.exports = { registerUser };
