// server/controllers/authController.js
const nodemailer = require("nodemailer");
const User = require("../models/user");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "[HIDDEN]" : "NOT SET");

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: `EduSphere <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP for EduSphere Registration",
    text: `Hi there,\n\nYour OTP is: ${otp}\n\nThank you for registering with EduSphere.`,
  };

  try {
    console.log("Sending OTP to:", email);
    await transporter.sendMail(mailOptions);
    console.log("✅ OTP email sent successfully.");
  } catch (error) {
    console.error("❌ Failed to send OTP:", error.message);
    throw error; // re-throw to be caught in the registerWithOtp catch
  }
};
exports.registerWithOtp = async (req, res) => {
  const { fullName, email, password, gender, designation } = req.body;
  try {
    const existingUser = await User.findOne({ email: email.trim().toLowerCase() });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await sendOtpEmail(email, otp);
    return res.status(200).json({ success: true, otp });
  } catch (err) {
    console.error("Error in registerWithOtp:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};

exports.finalRegister = async (req, res) => {
  const { fullName, email, password, gender, designation } = req.body;
    // ✅ Log the incoming data first
    console.log("🟣 Registering user:", email);
  try {
    const existingUser = await User.findOne({ email: email.trim().toLowerCase() });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const user = new User({ fullName, email, password, gender, designation });
    await user.save();
    console.log("✅ New user saved to MongoDB:", user);


    return res.status(201).json({ success: true, msg: "User registered successfully" });
  } catch (err) {
    console.error("Error in finalRegister:", err);
    return res.status(500).json({ msg: "Registration failed" });
  }
};

exports.resendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await sendOtpEmail(email, otp);
    return res.status(200).json({ success: true, otp });
  } catch (err) {
    console.error("Error in resendOtp:", err);
    return res.status(500).json({ msg: "Failed to resend OTP" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    return res.status(200).json({ success: true, msg: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ msg: "Login failed" });
  }
};
