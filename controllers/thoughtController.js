const { Thought, User } = require("../models");

const getThoughts = (req, res) => {
  Thought.find()
  .then((thoughts) => res.json(thoughts))
  .catch((err) => res.status(500).json(err));
}

const getThoughtById = (req, res) => {
  Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) => {
      !thought ? res.status(404).json({ message: "No thought found with that id" }) : res.json(thought)
    })
    .catch((err) => res.status(500).json(err))
}

const postNewThought = (req, res) => {


  // Push thought to associated user's thought list
}

const updateThought = (req,res) => {

}

const deleteThought = (req, res) => {


  // Remove thought from associated user

}

const addReaction = (req, res) => {

}

const deleteReaction = (req, res) => {

}

module.exports = {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
}