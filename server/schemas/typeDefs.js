const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

type User {
    username: String
    email: String!
    password: String!
}
type Post {
  _id: ID!
  content: String!
  author: String!
  Date: String!
}

type Job {
  _id: ID!
  title: String!
  description: String!
  start_date: Date!
  end_date: Date!
  location: String!
}

type Project {
  _id: ID!
  title: String!
  description: String!
  technologiesUsed: [String]
  date: Date
  githubLink: String
  liveDemoLink: String
}

type Auth {
  token: ID
  user: User
}
type Category {
  _id: ID
  name: String
}

type Query {
  getUserById(id: ID!): User
  categories: [Category]
  user: User
  jobs: [Job]
  Post(id: ID!): Post
  Project(id: ID!): Project
  projects: [Project]
}
type Mutation {
  addUser(username: String!, password: String!, email: String!): Auth
  addJob(title: String!, start_date: Date!, end_date: Date!, location: String!): Job
  updateUser(username: String, password: String): User
  login(username: String!, password: String!): Auth
  addProject(
    title: String!
    description: String!
    technologiesUsed: [String]
    date: Date
    githubLink: String
    liveDemoLink: String
  ): Project
}`


module.exports = typeDefs;