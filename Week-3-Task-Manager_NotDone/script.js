document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // TODO: Add event listener to the "Add Task" button


        // Check if the input is empty. If it is, alert the user and return.
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // TODO: Create a new list item (li) for the task
        const newTask = document.createElement("li");
        newTask.TaskContent = taskText;

        // Create "Complete" button and add event listener
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete-btn"); // Adding a class for styling
        completeBtn.addEventListener("click", function() {
            
            // Use "this" to reference the button's parent element (the <li> tag)
            this.parentElement.style.textDecoration = "line-through";
            this.parentElement.classList.add("completed");
            this.disabled = true; // Disable the button after completing the task
        });

        // TODO: Create "Remove" button and add event listener

    
        removeBtn.addEventListener("click", function() {
            // TODO: Use "this" to reference and remove the button's parent element (the <li> tag)
            
        });

        // TODO: Append the buttons to the new task item

        // TODO: Append the new task item to the task list

        // TODO: Clear the input field after adding the task
    });
});
