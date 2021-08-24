const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  listingName: {
    type: String,
    required: "Job listing must have a name.",
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
  },
  companyName: {
    type: String,
    required: true,
  },
});

const Job = model("Job", jobSchema);

module.exports = Job;
