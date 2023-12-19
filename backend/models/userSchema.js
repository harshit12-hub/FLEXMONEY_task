const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 18 && value <= 65;
      },
      message: 'Age must be between 18 and 65',
    },
  },
  selectedBatch: {
    type: String,
    required: true,
  },
  DateOfJoin: {
    type: Date,
    default: Date.now,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
