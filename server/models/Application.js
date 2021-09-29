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
    required: "Must have a message for the job application",
    minLength: 1,
    maxLength: 300,
    trim: true,
  },
  poster: {
    type: String,
  },
  applicant: {
    type: Schema.Types.ObjectId,
    ref: "Developer",
  },
  githubName: {
    type: String,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Application = model("Application", applicationSchema);

module.exports = Application;
