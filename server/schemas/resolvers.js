const { User, Group } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('groups');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('groups');
    },
    groups: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Group.find(params).sort({ createdAt: -1 });
    },
    group: async (parent, { name }) => {
      return Group.findOne({ name: name });
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new Error('Authentication required');
      }
      try {
        const user = await User.findById(context.user._id).populate('groups');
        return user;
      } catch (error) {
        throw new Error('Error fetching user data');
      }
    },

  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (_, { username, email, country, skillsOffering, skillsInterestedIn }, context) => {
      if (context.user) {
        const updateFields = {};
        if (username) updateFields.username = username;
        if (email) updateFields.email = email;
        if (country) updateFields.country = country;
        if (skillsOffering) updateFields.skillsOffering = skillsOffering;
        if (skillsInterestedIn) updateFields.skillsInterestedIn = skillsInterestedIn;
    
        const updatedUser = await User.findByIdAndUpdate(
          {_id:context.user._id},
          updateFields,
          { new: true, runValidators: true }
        );
    
        if (!updatedUser) {
          throw new Error('User not found!');
        }
    
        return updatedUser;
      }
    
      throw new AuthenticationError('Unauthorized');
    },
    deleteUser: async (parent, { userId }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(userId);
        
        if (deletedUser) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        return false;
      }
    },
    joinGroup: async (_, { userId, groupId }) => {
      try {
        const group = await Group.findByIdAndUpdate(
          {_id:groupId},
          { $addToSet: { members: userId } },
          { new: true }
        );

        if (!group) {
          throw new Error('Group not found!');
        }
        
      const addGrouptoUser = await User.findByIdAndUpdate(
        {_id:userId},
        { $addToSet: { groups: groupId } },
        { new: true }
      )
      if (!addGrouptoUser) {
        throw new Error('User not found!');
      }
       
      return group;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    leaveGroup: async (_, { userId, groupId }) => {
      try {
        // Find the group by ID and remove the user from the members array
        const group = await Group.findByIdAndUpdate(
          {_id:groupId},
          { $pull: { members: userId } },
          { new: true }
        );

        if (!group) {
          throw new Error('Group not found!');
        }

      const RemoveGroupfromUser = await User.findByIdAndUpdate(
        {_id:userId},
        { $pull: { groups: groupId } },
        { new: true }
      )
      if (!RemoveGroupfromUser) {
        throw new Error('User not found!');
      }
        return group;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    
    addFollower: async (_, { _id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id },
          {
            $addToSet: {
              followers: context.user._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return user;
      }
      throw AuthenticationError;
    },
    
    deleteFollower: async (_, { _id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id }, // Assuming context.user contains the authenticated user's data
          {
            $pull: {
              followers: context.user._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  
        return user;
      }
    
      throw new AuthenticationError('Unauthorized');
    },
  },
}

module.exports = resolvers;

 // deleteUser: async (_, { _id }, context) => {
    //   if (context.user) {
    //     const deletedUser = await User.findByIdAndDelete(_id);
    //     if (!deletedUser) {
    //       throw new Error('User not found!');
    //     }
    //     return true; // Return true if deletion is successful
    //   }
    //   throw new AuthenticationError('Unauthorized');
    // },
  
  // addGroup: async (parent, { name }, context) => {
  //   if (context.user) {
  //     const user = await User.findOneAndUpdate(
  //       { _id: userId },
  //       {
  //         $addToSet: {
  //           groups: {group: context.group.name},
  //         },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //     return user;
  //   }
  //   throw AuthenticationError;
  // },

  // removeGroup: async (parent, { groupId }, context) => {
  //   if (context.user) {
  //     await User.findOneAndUpdate(
  //       { _id: context.user._id },
  //       { $pull: { groups: groupId } }
  //     );
  //     return user;
  //   }
  //   throw AuthenticationError;
  // },


   // addFollower: async (_, { userId }) => {
    //   try {
    //     const group = await User.findByIdAndUpdate(
    //       {_id:userId},
    //       { $addToSet: { followers: userId } },
    //       { new: true, runValidators: true }
    //     );

    //     if (!user) {
    //       throw new Error('User not found!');
    //     }
    //     return user;
    //   } catch (error) {
    //     throw new Error(error.message);
    //   }
    // },
