const { User, Thought } = require("../models");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const getUserById = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then((user) => {
      !user ? res.status(404).json({ message: "No user found with that id" }) : res.json(user)
    })
    .catch((err) => res.status(500).json(err))
};

const createUser = (req, res) => {

}

const updateUserById = (req, res) => {

}

const deleteUser = (req, res) => {

}

const addFriend = (req, res) => {

}

const deleteFriend = (req, res) => {

}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  addFriend,
  deleteFriend
};
