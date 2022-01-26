const { User, Thought } = require("../models");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const getUserById = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then()
    .catch((err) => res.status(500).json(err))
};

const postNewUser = (req, res) => {

}

const putUserById = (req, res) => {

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
  postNewUser,
  putUserById,
  deleteUser,
  addFriend,
  deleteFriend
};
