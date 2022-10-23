const mongoose = require('mongoose');

const countySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A county name is required.'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('County', countySchema);
