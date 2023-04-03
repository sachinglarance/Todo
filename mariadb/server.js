const sequelize = require("./config/database");
const task_details = require("./module/task_details");
const user_details = require("./module/user_details");
const taskDetailsController = require('./controller/taskDetails');
var express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('This is sachin'));
app.get('/getAllTasks',(req, res) => {
  try {
      taskDetailsController.getAllTasks(req)
  } catch (err) {
      console.log("err..: ",err);
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))