const router = require("express").Router();
const {
  getUsers,
  getUserById,
  postNewUser,
  putUserById,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/users")
  .get(getUsers)
  .post(postNewUser)
  .delete(deleteUser)

router.route("/users/:userId")
  .get(getUserById)
  .put(putUserById)

router.route("/users/:userId/friends/:friendId")
  .get(addFriend)
  .delete(deleteFriend)

module.exports = router;
