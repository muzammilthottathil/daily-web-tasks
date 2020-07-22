const jsScore = {
  completed: 0,
  total: 2,
};
const webScore = {
  completed: 5,
  total: 7,
};

document.getElementById("webScore").innerHTML =
  webScore.completed + "/" + webScore.total;

document.getElementById("jsScore").innerHTML =
  jsScore.completed + "/" + jsScore.total;

const goToMain = (category) => {
  localStorage.setItem("category", category);
  window.location = "./src/pages/main.html";
};
