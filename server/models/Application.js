const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const applicationSchema = new Schema({
  companyName: {
    type: String,
  },
  listingName: {
    type: String,
    required: "What are you applying for?",
    trim: true,
  },
  message: {
    type: String,
    requiered: "Must have a message for the job application",
    minLength: 1,
    maxLength: 300,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Application = model("Application", applicationSchema);

module.exports = Application;
