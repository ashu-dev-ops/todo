// const Sequelize=require("sequelize")
// const sequelize=new Sequelize("task-todo","root","1234",{
//     dialect:"mysql"
// })
// module.exports=sequelize
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1234",
  DB: "node_sequelize_api_db",
  dialect: "mysql",
};
// imported to model