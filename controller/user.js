const db = require("../model/index");
const User = db.user;
const Task = db.task;
const addUser = async (req, res) => {
  const info = {
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
  };
  const user = await User.create(info);
  console.log(user);
  //   res.status(200).json(user);
  res.redirect("/task");

  //   res.render("pages/resgister");
};
// get all products
const getUser = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).json(users);
};

//get all user tasks
const getUserTasks = async (req, res) => {
  let data = await User.findAll({
    include: [{ model: Task, as: "task" }],
    // where: { id: 2 },
  });
  res.status(200).json(data);
};
module.exports = { getUser, addUser, getUserTasks };
