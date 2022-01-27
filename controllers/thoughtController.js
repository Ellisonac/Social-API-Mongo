const User = require("../models/User");
const Thought = require("../models/Thought");

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

const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);

    // Push thought to associated user's thought list
    const user = User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thought._id } },
      { new: true }
    );
    
    if (!user) {
      res.json({ message: 'Thought created but no user found for this ID' })
    } else {
      res.json({ message: 'Thought created' })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const updateThought = (req,res) => {

  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) => {
      !thought
        ? res.status(404).json({ message: "No thought found with that ID" })
        : res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
}

const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      res.status(404).json({ message: "No thought found with that ID" });
    }

    // Remove thought from associated user
    await User.findOneAndUpdate(
      { userId: thought.userId },
      { $pull: { thought: thought._id }},
      );

    res.status(200).json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

}

const addReaction = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $push: { reactions: req.body } },
    { runValidators: true, new: true }
  )
    .then((thought) => {
      !thought
        ? res.status(404).json({ message: "No thought found with that ID" })
        : res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
}

const deleteReaction = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { reactions: req.params.reactionId } }
  ).then((thought) => {
    !thought
      ? res.status(404).json({ message: "No thought with that ID found" })
      : res.status(200).json(thought);
  });
}

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
}