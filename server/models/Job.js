const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const jobSchema = new Schema({
  listingName: {
    type: String,
    required: "Job listing must have a name.",
    trim: true,
  },
  website: {
    type: String,
    required: "Must have a company website!",
    trim: true,
  },
  description: {
    type: String,
    required: "You must enter a description of the job.",
    trim: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  companyName: {
    type: String,
    // required: true,
  },
  poster: {
    type: String,
  },
});

const Job = model("Job", jobSchema);

module.exports = Job;
