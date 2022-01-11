//El for DOM element
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function() {
    // Create a new task item
    var listItemEL = document.createElement("li");

    // Style the new task item
    listItemEL.className = "task-item";

    // Add the text
    listItemEL.textContent = "This is a new task.";

    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEL);
};

buttonEl.addEventListener("click", createTaskHandler);

