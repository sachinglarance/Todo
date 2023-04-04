const { json } = require('body-parser');
const TaskDetails = require('../module/task_details');

const getAllTasks = async () => {
    try {
        const response = await TaskDetails.findAll();
        return response;
    } catch (err) {
        console.log("Error: ", err);
        throw err;
    }
};


module.exports = { getAllTasks };
