// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task));

// Add task button
addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        addTaskToDOM(task);
        saveTasks();
        taskInput.value = "";
    }
});

// Add task with Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});

// Function to add task to DOM
function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t !== task);
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
