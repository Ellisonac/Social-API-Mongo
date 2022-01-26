const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/")
  .get(getThoughts)
  .post(postNewThought);

router.route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions")
  .post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

module.exports = router;
