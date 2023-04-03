
const TaskDetails = require('./module/task_details')


const getAllTasks = async () => {
    try {
        return await TaskDetails.findAll({
            

            
        })
    } catch (err) {
        console.log("Error..: ", err);
    }
}

module.exports = getAllTasks;