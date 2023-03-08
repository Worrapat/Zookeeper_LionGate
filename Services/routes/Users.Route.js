const UsersController = require("../controllers/UsersController");
const router = require("express").Router();

router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUsersById);
router.post("/", UsersController.createUsers);
router.put("/", UsersController.updateUsers);
router.delete("/", UsersController.deleteUsers);

module.exports = router;
