const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const employerSchema = new Schema({
  name: {
    type: String,
    required: "You must enter your name.",
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address~`,
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  job: [
    {
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
    },
  ],
});

employerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

employerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employer = model("Employer", employerSchema);

module.exports = Employer;
