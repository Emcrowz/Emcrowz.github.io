var projectModalOne = document.getElementById("projectModalOne");
var btnProjectModalOne = document.getElementById("btnProjectModalOne");
var btnCloseProjectOne = document.getElementById("closeProjectModalOne");

btnProjectModalOne.onclick = function () {
  projectModalOne.style.display = "flex";
};

btnCloseProjectOne.onclick = function () {
  projectModalOne.style.display = "none";
};

var projectModalTwo = document.getElementById("projectModalTwo");
var btnProjectModalTwo = document.getElementById("btnProjectModalTwo");
var btnCloseProjectTwo = document.getElementById("closeProjectModalTwo");

btnProjectModalTwo.onclick = function () {
  projectModalTwo.style.display = "flex";
};

btnCloseProjectTwo.onclick = function () {
  projectModalTwo.style.display = "none";
};

var projectModalThree = document.getElementById("projectModalThree");
var btnProjectModalThree = document.getElementById("btnProjectModalThree");
var btnCloseProjectThree = document.getElementById("closeProjectModalThree");

btnProjectModalThree.onclick = function () {
  projectModalThree.style.display = "flex";
};

btnCloseProjectThree.onclick = function () {
  projectModalThree.style.display = "none";
};

var projectModalFour = document.getElementById("projectModalFour");
var btnProjectModalFour = document.getElementById("btnProjectModalFour");
var btnCloseProjectFour = document.getElementById("closeProjectModalFour");

btnProjectModalFour.onclick = function () {
  projectModalFour.style.display = "flex";
};

btnCloseProjectFour.onclick = function () {
  projectModalFour.style.display = "none";
};

var projectModalFive = document.getElementById("projectModalFive");
var btnProjectModalFive = document.getElementById("btnProjectModalFive");
var btnCloseProjectFive = document.getElementById("closeProjectModalFive");

btnProjectModalFive.onclick = function () {
  projectModalFive.style.display = "flex";
};

btnCloseProjectFive.onclick = function () {
  projectModalFive.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == projectModalOne) {
    projectModalOne.style.display = "none";
  }

  if (e.target == projectModalTwo) {
    projectModalTwo.style.display = "none";
  }

  if (e.target == projectModalThree) {
    projectModalThree.style.display = "none";
  }

  if (e.target == projectModalFour) {
    projectModalFour.style.display = "none";
  }

  if (e.target == projectModalFive) {
    projectModalFive.style.display = "none";
  }
};
