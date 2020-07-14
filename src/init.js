let totalTask = 5;
let completedTask = 4;

let taskText = document.getElementById("task");
let taskImage = document.getElementById("task-img");
let taskShowing =
  completedTask != totalTask ? completedTask + 1 : completedTask;
let onScreenTask = taskShowing - 1;

function afterLoad() {
  taskText = document.getElementById("task");
  taskImage = document.getElementById("task-img");
  document.getElementById("completed").innerHTML = completedTask;
  document.getElementById("total").innerHTML = totalTask;
  document.getElementById("task-number").innerHTML = taskShowing;

  taskText.src = "../../Assets/tasks/task-" + taskShowing + ".svg";
  taskImage.src = "../../Assets/tasks/task-" + taskShowing + "-img.svg";
}

const decrease = () => {
  onScreenTask = (onScreenTask + totalTask - 1) % totalTask;

  taskText.src = "../../Assets/tasks/task-" + (onScreenTask + 1) + ".svg";
  taskImage.src = "../../Assets/tasks/task-" + (onScreenTask + 1) + "-img.svg";
  document.getElementById("task-number").innerHTML = onScreenTask + 1;
};
const increase = () => {
  onScreenTask = (onScreenTask + 1) % totalTask;

  taskText.src = "../../Assets/tasks/task-" + (onScreenTask + 1) + ".svg";
  taskImage.src = "../../Assets/tasks/task-" + (onScreenTask + 1) + "-img.svg";
  document.getElementById("task-number").innerHTML = onScreenTask + 1;
};
