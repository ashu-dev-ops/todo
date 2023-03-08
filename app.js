const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const bodyParser = require("body-parser");
const { getUserTasks } = require("./controller/user");
//
require("./db/config");

// view engine set-up
app.set("view engine", "ejs");
app.set("views", "views");
//body parser set-up

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// publice set-up
app.use(express.static("public"));

app.use("/register", userRoutes);
app.use("/task", taskRoutes);
app.get("/dummy", getUserTasks);
app.use("/", (req, res) => {
  res.render("pages/home");
});
app.listen(3002, () => {
  console.log("listening");
});
