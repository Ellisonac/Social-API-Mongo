const { Schema, model } = require("mongoose");

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email)
}

const userSchema = new Schema({
  username: {
    type: string,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: string,
    unique: true,
    required: true,
    trim: true,
    validate: [validateEmail, "Please enter a valid email address"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const User = model('User',userSchema);


// Virtual friend count property
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = User;