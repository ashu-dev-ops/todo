const express = require("express");
const { addUser, getUser, getUserTasks } = require("../controller/user");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("pages/resgister");
});

// router.get("/user-task", getUserTasks);
// router.get("/", getUser);
router.post("/", addUser);
module.exports = router;
