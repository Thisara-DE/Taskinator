//El for DOM element
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) {

    event.preventDefault();
    
    // Create a new task item
    var listItemEL = document.createElement("li");

    // Style the new task item
    listItemEL.className = "task-item";

    // Add the text
    listItemEL.textContent = "This is a new task.";

    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEL);
};

formEl.addEventListener("submit", createTaskHandler);

