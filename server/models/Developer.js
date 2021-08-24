const { Schema, model } = require("mongoose");
const User = require("./User");

const developerSchema = new Schema({
  githubName: {
    type: String,
    required: true,
    trim: true,
  },
  likedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Developer = User.discriminator("Developer", developerSchema);

module.exports = Developer;
