const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer, User, Job } = require("../models");
const { update } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  User: {
    __resolveType(obj, context, info) {
      return obj.__t;
    },
  },
  Query: {
    // This gives every users
    Jobs: async () => {
      return await Job.find();
    },
    Developer: async (parent, args, context) => {
      if (context.user) {
        return await User.findById({ _id: context.user._id }).populate(
          "likedBy"
        );
      }
    },
    Developers: async () => {
      return await Developer.find();
    },

    Employer: async (parent, args, context) => {
      if (context.user) {
        return await Employer.findById({ _id: context.user._id }).populate(
          "jobs"
        );
      }
    },
    EmpLikedList: async (parent, args, context) => {
      if (context.user) {
        return await User.findById({ _id: context.user._id }).populate(
          "likedDevelopers"
        );
      }
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    addDevLike: async (parent, { developerId }, context) => {
      if (context.user) {
        const query = { _id: developerId };
        const query2 = { _id: context.user._id };

        const update = {
          $push: {
            likedBy: context.user._id,
          },
        };
        const update2 = {
          $push: {
            likedDevelopers: developerId,
          },
        };

        const options = {
          new: true,
          runValidators: true,
        };
        const [updatedDev, updateEmp] = await Promise.all([
          Developer.findOneAndUpdate(query, update, options),
          Employer.findOneAndUpdate(query2, update2, options),
        ]);

        return updateEmp;
      }
    },

    addLinkedIn: async (parent, { developerId, linkedIn }, context) => {
      const update = {};
      linkedIn ? (update.linkedIn = linkedIn) : (update.linkedIn = "");
      const newLink = await Developer.findOneAndUpdate(
        { _id: developerId },
        update
      );
      return newLink;
      // if (context.user) {
      //   if (context.user._id === developerId) {
      //   }
      //   return;
      // }
    },

    addJobb: async (parent, { listingName, description, website }, context) => {
      if (context.user) {
        console.log(context.user._id + "freak");
        const newJob = await Job.create({
          listingName,
          description,
          website,
          companyName: context.user.companyName,
        });

        await Employer.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { jobs: newJob._id } }
        );

        return newJob;
      }
      throw new AuthenticationError("You need to be logged in!");
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

    applyMessage: async (parent, { employerId, jobID, message }, context) => {
      if (context.user) {
        const query = { _id: employerId };

        const update = {
          $push: {
            messages: {
              message: message,
              jobID: jobID,
              sentBy: context.user._id,
            },
          },
        };

        const options = {
          new: true,
          runValidators: true,
        };

        await Employer.findOneAndUpdate(query, update, options);
      }
      throw new AuthenticationError("You need to be logged in!");
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
        return Job.findByIdAndUpdate(
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
      if (context.user) {
        return Job.findByIdAndDelete(_id);
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
