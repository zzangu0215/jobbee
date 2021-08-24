const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer, User } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    Developers: async () => {
      return await Developer.find().populate("employers");
    },

    aEmployer: async (parent, { _id }) => {
      // if (context.employer) {
      return await Employer.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },

    aDeveloper: async (parent, { _id }) => {
      // if (context.developer) {
      return await Developer.findById(_id);
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      // const token = signToken(Employer);
      return { User };
    },
    // addDeveloper: async (parent, { name, email, githubName, password }) => {
    //   const developer = await Developer.create({
    //     name,
    //     email,
    //     githubName,
    //     password,
    //   });
    //   // const token = signToken(Developer);
    //   return { Developer };
    // },
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
