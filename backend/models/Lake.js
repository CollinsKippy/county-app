const mongoose = require('mongoose');

const lakeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Lake name is required.'],
    },
    location: String,
  },
  {
    timestamps: true,
  }
);

const Lake = mongoose.model('Lake', lakeSchema);

module.exports = Lake;
