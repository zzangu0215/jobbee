const { AuthenticationError } = require("apollo-server-express");
const { Employer, Developer, User, Job, Application } = require("../models");
const { update } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  User: {
    __resolveType(obj, context, info) {
      return obj.__t;
    },
  },
  Query: {
    Jobs: async () => {
      return await Job.find();
    },
    Job: async (parent, args, context) => {
      return await Job.findById({ _id: args._id });
    },
    Developer: async (parent, args, context) => {
      if (context.user) {
        return await Developer.findById({ _id: context.user._id })
          .populate("appliedJobs")
          .populate("likedBy");
      }
    },
    Developers: async () => {
      return await Developer.find();
    },

    Employer: async (parent, args, context) => {
      if (context.user) {
        return await Employer.findById({ _id: context.user._id })
          .populate("jobs")
          .populate("messages");
      }
    },
    EmpLikedList: async (parent, args, context) => {
      if (context.user) {
        return await User.findById({ _id: context.user._id }).populate(
          "likedDevelopers"
        );
      }
    },

    Applicant: async (parent, args, context) => {
      if (context.user) {
        return await Developer.findById({ _id: args._id }).populate(
          "appliedJobs"
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

    removeLike: async (parent, { developerId }, context) => {
      if (context.user) {
        const query = { _id: developerId };
        const query2 = { _id: context.user._id };

        const update = {
          $pull: {
            likedBy: context.user._id,
          },
        };
        const update2 = {
          $pull: {
            likedDevelopers: developerId,
          },
        };
        const options = {
          new: true,
        };

        const test = await Developer.findOneAndUpdate(query, update, options);

        console.log({ test });

        const [updatedDev, updateEmp] = await Promise.all([
          Developer.findOneAndUpdate(query, update, options),
          Employer.findOneAndUpdate(query2, update2, options),
        ]);

        return updateEmp;
      }
    },

    jobApply: async (parent, { employerId, jobID, message }, context) => {
      if (context.user) {
        const jobInfo = await Job.findOne({ _id: jobID });

        const newApplication = await Application.create({
          companyName: jobInfo.companyName,
          listingName: jobInfo.listingName,
          message,
          applicant: context.user._id,
          githubName: context.user.githubName,
          name: context.user.name,
        });

        await Employer.findOneAndUpdate(
          { _id: employerId },
          { $addToSet: { messages: newApplication._id } }
        );

        await Developer.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appliedJobs: jobID } }
        );

        return newApplication;
      }
      throw new AuthenticationError("You need to be logged in!");
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

    addResumeLink: async (parent, { developerId, resumeLink }, context) => {
      const update = {};
      resumeLink ? (update.resumeLink = resumeLink) : (update.resumeLink = "");
      const newLink = await Developer.findOneAndUpdate(
        { _id: developerId },
        update
      );
    },

    addJobb: async (parent, { listingName, description, website }, context) => {
      if (context.user) {
        const newJob = await Job.create({
          listingName,
          description,
          website,
          companyName: context.user.companyName,
          poster: context.user._id,
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
