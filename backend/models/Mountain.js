const mongoose = require('mongoose');

const mountainSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Mountain name is required.'],
    },
    height: Number,
  },
  {
    timestamps: true,
  }
);

const Mountain = mongoose.model('Mountain', mountainSchema);

module.exports = Mountain;
