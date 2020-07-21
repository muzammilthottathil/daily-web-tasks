const jsStatus = [
  {
    name: "Task-1",
    completed: false,
  },
  {
    name: "Task-2",
    completed: false,
  },
];

/*
    ==============================

      WEB TASK STATUS DOWN HERE

    ==============================
*/

const webStatus = [
  {
    name: "Task-1",
    completed: true,
  },
  {
    name: "Task-2",
    completed: true,
  },
  {
    name: "Task-3",
    completed: true,
  },
  {
    name: "Task-4",
    completed: true,
  },
  {
    name: "Task-5",
    completed: true,
  },
  {
    name: "Task-6",
    completed: false,
  },
];

/*
    ==============================

        MAIN JAVASCRIPT HERE

    ==============================
*/

let category = window.localStorage.getItem("category");

let totalLink = "";
let task;

const createLink = (taskName, status) => {
  link = "<a onclick=Redirect('" + taskName.toLowerCase() + "') ";
  if (status) {
    link += 'class="done"';
  }
  return (link += ">" + taskName + "</a>");
};

if (category === "jsTask") {
  document.querySelector("#heading").innerHTML = "JS Tasks";
  document.querySelector("#task-section").classList.add("js-task-main");

  jsStatus.forEach((task) => {
    totalLink += createLink(task.name, task.completed);
  });
} else {
  document.querySelector("#heading").innerHTML = "Web Tasks";
  document.querySelector("#task-section").classList.add("web-task-main");

  webStatus.forEach((task) => {
    totalLink += createLink(task.name, task.completed);
  });
}

document.getElementById("task-list").innerHTML = totalLink;

const Redirect = (taskName) => {
  localStorage.requiredTask = JSON.stringify([category, taskName]);
  window.location = "../pages/task-viewer.html";
};
