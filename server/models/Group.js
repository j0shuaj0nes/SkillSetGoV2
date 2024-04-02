const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const User = require('./User');

const groupSchema = new Schema({
  name: {
    type: String,
    required: 'You need to have a name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  members:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Group = model('Group', groupSchema);


module.exports = Group;

