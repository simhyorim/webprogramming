function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    
    // Create span element for task description
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskInput.value;
    
    // Create span element for deadline
    var deadlineSpan = document.createElement("span");
    deadlineSpan.textContent = " (Deadline: " + deadlineInput.value + ")";
    
    // Create buttons for complete and delete
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(taskSpan);
    li.appendChild(deadlineSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
    deadlineInput.value = "";
}
