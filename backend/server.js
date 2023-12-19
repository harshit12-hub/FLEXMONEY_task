const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const userController = require("./controllers/user.controller");
const {dbConnection} = require("./dbConnection");


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/", userController);

// Schema and Model for Payments
const paymentSchema = new mongoose.Schema({
  name: String,
  PaidMonth: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

// POST endpoint for handling payment
app.post('/api/payment', async (req, res) => {
  const { name, PaidMonth } = req.body;

  try {
    // Create a new Payment document
    const newPayment = new Payment({ name, PaidMonth });

    // Save the payment to the database
    await newPayment.save();

    res.status(200).json({ message: 'Payment received and saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving payment to the database.' });
  }
});
// listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});