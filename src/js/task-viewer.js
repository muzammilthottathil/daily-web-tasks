const webTasks = [
  {
    name: "task-1",
    description:
      "Create a hamburger navigation icon using single div. You can use properties such as ::before and ::after for this purpose",
    source: "./web-tasks/task-1/hamburger-icon.html",
  },
  {
    name: "task-2",
    description:
      "Use a single svg image of bulb and make it glow on mouse hover. You can use the properties like FILTER to add dropshadow effect to bulb to make it glow",
    source: "./web-tasks/task-2/glow-bulb.html",
  },
  {
    name: "task-3",
    description:
      "Position an image at the exact center of the viewport. You are not allowed to use margins and padding to position the image. You can use FLEX property to get the result",
    source: "./web-tasks/task-3/flex-center.html",
  },
  {
    name: "task-4",
    description:
      "Create multiple div and arrange as shown. You are not allowed use absolute properties to arrange it. You can use FLEX properties to position divs.",
    source: "./web-tasks/task-4/flex-align.html",
  },
  {
    name: "task-5",
    description:
      "Create the animation shown. Use KEYFRAMES to do the animations and flex to position the elements.",
    source: "./web-tasks/task-5/anim1.html",
  },
  {
    name: "task-6",
    description:
      "Create the Loading animation shown below. You can use KEYFRAMES to achieve the output, also flex properties will help to arrange items. The three dots must be three divs not images.",
    source: "./web-tasks/task-6/anim2.html",
  },
  {
    name: "weekend-1",
    description:
      "Create a website to maintain the daily tasks given. Here is a wireframe demo. You can use YOU OWN DESIGNS, ANIMATIONS, IDEAS to build a better one. Make it more attractive as you can...",
    source: "./web-tasks/weekend-1/task-web.html",
  },
];

/*


            =======================

            JAVASCRIPT TASKS BELOW

            =======================


*/

const jsTasks = [
  {
    name: "task-1",
    description:
      "Create a div to display the colour and also display its name. Accept color name or hex codes as input and show the input color in div as well as name of the colour.",
    source: "./js-tasks/task-1/color_changer.html",
  },
  {
    name: "task-2",
    description:
      "Create a button, such that on clicking it increase the display content and on again clicking on it will reduce the onscreen content.",
    source: "./js-tasks/task-2/more-less.html",
  },
];

/*


            =======================

                MAIN CODE BELOW

            =======================


*/

requiredTask = JSON.parse(localStorage.requiredTask);

let taskDescription, taskLink;

let taskNameHtml = document.getElementById("taskName");
let frame = document.getElementById("frame");
let taskDescriptionHtml = document.getElementById("description");

if (requiredTask.includes("jsTask")) {
  jsTasks.forEach((data) => {
    if (requiredTask[1] === data.name) {
      taskDescription = data.description;
      taskLink = data.source;
    }
  });
} else {
  webTasks.forEach((data) => {
    if (requiredTask[1] === data.name) {
      taskDescription = data.description;
      taskLink = data.source;
    }
  });
}

taskNameHtml.innerHTML =
  requiredTask[1][0].toUpperCase() + requiredTask[1].slice(1);
taskDescriptionHtml.innerHTML = taskDescription;
frame.setAttribute("src", taskLink);

const goBack = () => {
  window.history.back();
};
