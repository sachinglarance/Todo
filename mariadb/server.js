const sequelize = require("./config/database");
const taskDetailsDAO = require('./dao/askDetailsDAO');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is sachin');
});

app.get('/getAllTasks', async (req, res) => {
  try {
    const tasks = await taskDetailsDAO.getAllTasks(req, res);
    res.status(200).json({
      status: 'success',
      message: 'Tasks retrieved successfully',
      data: tasks,
    });
  } catch (err) {
    console.error("Error occurred while fetching tasks: ", err);
    res.status(500).send("An error occurred while fetching tasks. Please try again later.");
  }
});


app.get('/getTaskbyId', async (req, res) => {
  try {
    const tasks = await taskDetailsDAO.getTaskbyId(req, res);
    res.send(tasks);
  } catch (err) {
    console.error("Error occurred while fetching tasks: ", err);
    res.status(500).send("An error occurred while fetching tasks. Please try again later.");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
