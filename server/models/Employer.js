const { Schema, model } = require("mongoose");

const User = require("./User");

const employerSchema = new Schema({
  companyName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  likedDevelopers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  job: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Employer = User.discriminator("Employer", employerSchema);

module.exports = Employer;
