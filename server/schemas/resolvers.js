const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer, User, Job } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // This gives every users
    User: async () => {
      return await User.find();
    },
    // This gives a user
    aUser: async (parent, { _id }) => {
      // if (context.employer) {
      return await User.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    Job: async () => {
      return await Job.find();
    },
    aJob: async (parent, { companyName, listingName, description, createdAt }) => {
      return await Job.findOne(
        { companyName: companyName },
        { listingName: 1, description: 1, createdAt: 1, companyName: 1 }
      );
    },
    Developer: async () => {
      return await Developer.find();
    },
    // This gives a user
    aDeveloper: async (parent, { _id }) => {
      // if (context.employer) {
      return await Developer.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      // const token = signToken(user);
      return { user };
    },
    addJob: async (parent, { listingName, description, createdAt, companyName }) => {
      const job = await Job.create({ listingName, description, createdAt, companyName });
      // const token = signToken(user);
      return { job };
    },
    addDeveloper: async (parent, { name, email, password, githubName }) => {
      const developer = await Developer.create({ name, email, password, githubName });
      // const token = signToken(user);
      return { Developer };
    },
    // employerlogin: async (parent, { email, password }) => {
    //   const Employer = await Employer.findOne({ email });

    //   if (!Employer) {
    //     throw new AuthenticationError("No Employer with this email found!");
    //   }

    //   const correctPw = await Employer.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect password!");
    //   }

    //   const token = signToken(Employer);
    //   return { token, Employer };
    // },
    // developerlogin: async (parent, { email, password }) => {
    //   const Developer = await Developer.findOne({ email });

    //   if (!Developer) {
    //     throw new AuthenticationError("No Developer with this email found!");
    //   }

    //   const correctPw = await Developer.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect password!");
    //   }

    //   const token = signToken(Developer);
    //   return { token, Developer };
    // },
    // addJob: async (parent, { employerId, post, description, date }, context) => {
    //   if (context.employer) {
    //     return Employer.findOneAndUpdate(
    //       { _id: employerId },
    //       {
    //         $addToSet: {
    //           listingName: post,
    //           description: description,
    //           CreatedAt: date
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    // updateJob: async (parent, { employerId, post, description, date }, context) => {
    //   if (context.employer) {
    //     return Employer.updateOne(
    //       { _id: employerId },
    //       {
    //         $set: {
    //           listingName: post,
    //           description: description,
    //           CreatedAt: date
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    // removeJob: async (parent, { post, description, date }, context) => {
    //   if (context.employer) {
    //     return Employer.findOneAndUpdate(
    //       { _id: context.employer._id },
    //       {
    //         $pull: {
    //           listingName: post,
    //           description: description,
    //           CreatedAt: date
    //         }
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};
module.exports = resolvers;
