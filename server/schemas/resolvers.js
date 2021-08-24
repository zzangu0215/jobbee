const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    Developers: async () => {
      return Developer.find();
    },

    aEmployer: async (parent, args, context) => {
      if (context.employer) {
        return Employer.findOne({ _id: context.employer._id }.polulate("employers"));
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    aDeveloper: async (parent, args, context) => {
      if (context.developer) {
        return Employer.findOne({ _id: context.developer._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },


  Mutation: {
    addEmployer: async (parent, { name, email, password }) => {
      const Employer = await Employer.create({ name, email, password });
      const token = signToken(Employer);
      return { token, Employer };
    },
    addDeveloper: async (parent, { name, email, password }) => {
      const Developer = await Developer.create({ name, email, password });
      const token = signToken(Developer);
      return { token, Developer };
    },
    employerlogin: async (parent, { email, password }) => {
      const Employer = await Employer.findOne({ email });

      if (!Employer) {
        throw new AuthenticationError("No Employer with this email found!");
      }

      const correctPw = await Employer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(Employer);
      return { token, Employer };
    },
    developerlogin: async (parent, { email, password }) => {
      const Developer = await Developer.findOne({ email });

      if (!Developer) {
        throw new AuthenticationError("No Developer with this email found!");
      }

      const correctPw = await Developer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(Developer);
      return { token, Developer };
    },
    addJob: async (parent, { employerId, post, description, date }, context) => {
      if (context.employer) {
        return Employer.findOneAndUpdate(
          { _id: employerId },
          {
            $addToSet: {
              listingName: post,
              description: description,
              CreatedAt: date
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateJob: async (parent, { employerId, post, description, date }, context) => {
      if (context.employer) {
        return Employer.updateOne(
          { _id: employerId },
          {
            $set: {
              listingName: post,
              description: description,
              CreatedAt: date
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeJob: async (parent, { post, description, date }, context) => {
      if (context.employer) {
        return Employer.findOneAndUpdate(
          { _id: context.employer._id },
          {
            $pull: {
              listingName: post,
              description: description,
              CreatedAt: date
            }
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },


  }
}
module.exports = resolvers;
