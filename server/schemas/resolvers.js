const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer, User, Job } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // This gives every users
    User: async () => {
      return await User.find();
    },
    // This gives a user
    // aUser: async (parent, { _id }) => {
    //   // if (context.employer) {
    //   return await User.findById(_id);
    //   // }
    //   // throw new AuthenticationError("You need to be logged in!");
    // },
    Job: async () => {
      return await Job.find();
    },
    aJob: async (
      parent,
      { companyName, listingName, description, createdAt }
    ) => {
      return await Job.findOne(
        { companyName: companyName },
        { listingName: 1, description: 1, createdAt: 1, companyName: 1 }
      );
    },
    Developer: async () => {
      return await Developer.find();
    },
    aDeveloper: async (parent, { _id }) => {
      // if (context.employer) {
      return await Developer.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    Employer: async () => {
      return await Employer.find();
    },
    aEmployer: async (parent, { _id }) => {
      // if (context.employer) {
      return await Employer.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addJob: async (
      parent,
      { listingName, description, createdAt, companyName }
    ) => {
      const job = await Job.create({
        listingName,
        description,
        createdAt,
        companyName,
      });
      return { job };
    },
    addDeveloper: async (parent, { name, email, password, githubName }) => {
      const developer = await Developer.create({
        name,
        email,
        password,
        githubName,
      });
      const token = signToken(developer);
      return { token };
    },
    addEmployer: async (parent, { name, email, password, companyName }) => {
      const employer = await Employer.create({
        name,
        email,
        password,
        companyName,
      });
      const token = signToken(employer);
      return { token };
    },
    userlogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    updateJob: async (parent, { _id, listingName, description }, context) => {
      if (context.user) {
        return Job.findOneAndUpdate(
          { _id: _id },
          {
            $set: {
              listingName: listingName,
              description: description,
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
    removeJob: async (parent, { _id }, context) => {
      if (context.employer) {
        return Job.findByIdAndDelete(_id);
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
