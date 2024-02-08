const { User, Post, Project, Job } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getUserById: async (parent, { id }, context) => {
      try {
        // Fetch a single job by ID
        const job = await Job.findById(id);
        return job;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching job");
      }
    },
    jobs: async (parent, args, context) => {
      try {
        // Fetch all jobs
        const jobs = await Job.find();
        return jobs;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching jobs");
      }
    },

    Post: async (parent, args, context) => {
      const user = await User.findById(context.user.id).populate({
        path: "Post",
        populate: "Post.find",
      });
      return user;
    },

    Project: async (parent, args, context) => {
      const user = await User.findById(context.user.id).populate({
        path: "Project",
        populate: "Project.find",
      });
      return user;
    },

    user: async (parent, args, context) => {
      const user = await User.findById(context.user.id).populate({
        path: "User",
        populate: "User.find",
      });
      return user;
    },
    getUserById: async (parent, { id }, context) => {
      const user = await User.findById(id).populate({
        path: "User",
        populate: "User.find",
      });
      return user;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addJob: async (parent, args, context) => {
      const job = await Job.create(args);
      const { title, start_date, end_date, location } = job;
      return { title, start_date, end_date, location };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
