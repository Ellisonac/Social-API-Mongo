const mongoose = require("mongoose");

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email)
}

const userSchema = new mongoose.Schema({
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
  thoughts: {

  },
  friends: {

  }
});

const User = mongoose.model('User',userSchema);

module.exports = User;