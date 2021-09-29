const { Schema, model } = require("mongoose");
const User = require("./User");

const developerSchema = new Schema({
  githubName: {
    type: String,
    required: true,
    trim: true,
  },
  linkedIn: {
    type: String,
    trim: true,
  },
  resumeLink: {
    type: String,
    trim: true,
  },
  likedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  appliedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Developer = User.discriminator("Developer", developerSchema);

module.exports = Developer;

//make a post request when the heart is clicked that pushes the employer's object id into the user array and save it
