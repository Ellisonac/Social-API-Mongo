const { Schema } = require("mongoose");

// Reaction subdocument schema
const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    get: function () {
      return this.createdAt;
    },
  },
});

module.exports = reactionSchema;
