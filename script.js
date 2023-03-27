// Initialization
const newInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

// Window onload
window.onload = () => {
  count = Object.keys(localStorage).length;
  displayTasks();
} 

//Display the tasks
const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = "inline-block";
  } else {
    tasksDiv.style.display = "none";
  }

// clear the tasks
  tasksDiv.innerHTML = "";

// Fetching values in localstorage
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();
  for (let key of tasks) {
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    tasksDiv.appendChild(taskInnerDiv);
  }
  
// Edit tasks
  editTasks = document.getElementsByClassName("edit");
  Array.from(editTasks).forEach((element) => {
    element.addEventListener("click", (e) => {
     newInput.focus();
    // When you have js running on the same event of nested elements to stop being called.
      e.stopPropagation();
      disableButtons(true);
    //assigns the parent element of the edit button to the variable parent
      let parent = element.parentElement;
      // retrieves the current task name and assigns it to the value of the new input element.
      newInput.value = parent.querySelector("#taskname").innerText;
      //set updateNote to the task that is being edited
      updateNote = parent.id;
      parent.remove();
    });
  });

  //Delete tasks
  deleteTasks = document.getElementsByClassName("delete");
  Array.from(deleteTasks).forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      if(confirm("Are you sure to Delete?")==true){
        let parent = element.parentElement;
        removeTask(parent.id);
        parent.remove();
        count -= 1;
        showToast("deleted");
      }else{
        return false;
      }
     
    });
  });
};

//Disable Edit Button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// Remove the task from localstorage
const removeTask = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};

//add the task to localstorage
const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
  
  if(updateNote !== "") {
    showToast("updated");
    updateNote = "";
  }
};

//check an existing task
const checkExistingTask = (taskValue, updateNote) => {
  if (updateNote !== "") {
    return false; // If we're updating a task, skip the check
  }
  for (let key in localStorage) {
    if (key.endsWith(`_${taskValue}`)) {
      return true;
    }
  }
  return false;
};

// Add a new task
document.querySelector("#push").addEventListener("click", () => {
  //Enable the edit button
  disableButtons(false);
  if (newInput.value.length == 0) {
    alert("You should enter a task");
  } else if (checkExistingTask(newInput.value, updateNote)) {
    alert("Task Already Exists!");
  } else {
    //Store locally and display from local storage
    if (updateNote == "") {
      //new task
      updateStorage(count, newInput.value, false);
    } else {
      //update task
      // index 0 is st from first. it is using updating field
      let existingCount = updateNote.split("_")[0];
      removeTask(updateNote);
      updateStorage(existingCount, newInput.value, false);
      updateNote = "";
    }
    count += 1;
    newInput.value = "";
    showToast("added");
  }
});

  newInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("#push").click();
    }
  });

  function showToast(messageType) {
    let toastMessage;
    switch(messageType) {
      case "added":
        toastMessage = "Task added successfully!";
        break;
      case "updated":
        toastMessage = "Task updated successfully!";
        break;
      case "deleted":
        toastMessage = "Task deleted successfully!";
        break;
    }
    let toast = document.getElementById(messageType);
    toast.className = "show";
    toast.innerText = toastMessage;
    setTimeout(() => {
      toast.className = toast.className.replace("show", toastMessage);
    }, 3000);
  }
  

  