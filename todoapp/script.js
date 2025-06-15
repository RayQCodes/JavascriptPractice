const newbut = document.getElementById("add-task-btn");
let parents = document.getElementById("todo-list");
let input = document.getElementById("todo-input");

//array to keep track of all tasks
let tasks = [];

//listens for a click
newbut.addEventListener("click", function () {
  //grabs the value from your input and store
  const Tasklist = input.value.trim();
  //checking if what u put is empty
  if (Tasklist === "") {
    return;
  }
  //creates a unique object for individual submission and later pushed into the task array keeping track of all the tasks
  let taskobject = {
    id: Date.now(),
    text: Tasklist,
    completed: false,
  };

  tasks.push(taskobject);
});
