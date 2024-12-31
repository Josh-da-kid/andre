// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  const addTask = () => {
    // Get the task input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Create the task text element
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "removeTask";

    // Add click event to remove the task
    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    // Append task text and remove button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  };

  // Add event listener to the "Add Task" button
  addTaskButton.addEventListener("click", addTask);

  // Optional: Add functionality to use the "Enter" key to add tasks
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

