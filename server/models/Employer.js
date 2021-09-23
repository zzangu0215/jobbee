const { Schema, model } = require("mongoose");
const User = require("./User");

const employerSchema = new Schema({
  companyName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  likedDevelopers: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Developer",
      },
    ],
    default: [],
    index: true,
  },

  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],

  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});

const Employer = User.discriminator("Employer", employerSchema);

module.exports = Employer;
