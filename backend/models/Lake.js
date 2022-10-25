const mongoose = require('mongoose');

const lakeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name of Lake is re'],
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Lake = mongoose.model('Lake', lakeSchema);

module.exports = Lake;
