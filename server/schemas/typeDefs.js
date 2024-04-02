const typeDefs = `
  type User {
    _id: ID
    username: String
    givenName: String
    familyName: String
    email: String
    password: String
    followers: [User]
    groups: [Group]
    country: String
    skillsOffering: [String]
    skillsInterestedIn: [String]
  }

  type Group {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    groups: [Group]
    group(name: String!): Group
  }

  type Query {
  me(
    username: String
    givenName: String,
    familyName: String,
    email: String,
    country: String,
    skillsOffering: [String],
    skillsInterestedIn: [String],
    groups: [Group],
    followers: [Followers]

  ): Auth


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, country: String, skillsOffering: String, skillsInterestedIn: String): User 
    deleteUser(_id: ID!): Boolean
    login(email: String!, password: String!): Auth
    # addGroup(name: String!): User
    # removeGroup(name: String!): User
    joinGroup(userId: ID!, groupId: ID!): Group
    leaveGroup(userId: ID!, groupId: ID!): Group
    addFollower(_id: ID!): User
    deleteFollower(_id: ID!): User
  }
`;

module.exports = typeDefs;


//? updated user Auth??
