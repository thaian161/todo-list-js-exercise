// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(
        `${task.title} has${task.complete ? " ✔️" : " not ❌"}been completed`
      );
    },
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

//====DRIVER CODE BELOW=====
const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask(
  "Do Laundry",
  "Wash and dry clothes duh 🧺🧼👕👚👔👖🧦👙👗"
);
const tasks = [task1, task2];
console.log(tasks);
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(`Title is ${task1.title}`);
console.log(`Description is ${task1.description}`);
