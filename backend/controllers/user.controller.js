const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");
// register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, age, selectedBatch,DateOfJoin} = req.body;
    const newUser = new userSchema({
     name,
     age,
     selectedBatch,
     DateOfJoin
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

  

  module.exports = router;

