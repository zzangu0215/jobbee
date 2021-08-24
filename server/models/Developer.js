const { Schema, model } = require("mongoose");
const { bcrypt } = require("bcrypt");
// const developerFormat = require('../utils/developerFormat');

const developerSchema = new Schema({
  name: {
    type: String,
    required: "We know you have a name!",
    trim: true,
  },

  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address~`,
    },
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  githubName: {
    type: String,
    required: true,
    trim: true,
  },

  jobs: {
    type: Schema.Types.ObjectId,
    ref: "Employer",
    required: true,
  },
});

developerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

developerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Developer = model("Developer", developerSchema);

module.exports = Developer;
