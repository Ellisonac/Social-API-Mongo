const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/users")
  .get(getUsers)
  .post(createUser)
  

router.route("/users/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUser)

router.route("/users/:userId/friends")
  .post(addFriend)

router.route("/users/:userId/friends/:friendId")
  .delete(deleteFriend)

module.exports = router;
