var skillsModal = document.getElementById("skillsModal");
var projectModalOne = document.getElementById("projectModalOne");
var projectModalTwo = document.getElementById("projectModalTwo");

var btnSkills = document.getElementById("btnSkillsModal");
var btnSkillsClose = document.getElementById("closeSkillsModal");

var btnProjectModalOne = document.getElementById("btnProjectModalOne");
var btnProjectModalTwo = document.getElementById("btnProjectModalTwo");
var btnCloseProjectOne = document.getElementById("closeProjectModalOne");
var btnCloseProjectTwo = document.getElementById("closeProjectModalTwo");

btnSkills.onclick = function () {
  skillsModal.style.display = "block";
};

btnSkillsClose.onclick = function () {
  skillsModal.style.display = "none";
};

btnProjectModalOne.onclick = function () {
  projectModalOne.style.display = "block";
};

btnProjectModalTwo.onclick = function () {
  projectModalTwo.style.display = "block";
};

btnCloseProjectOne.onclick = function () {
  projectModalOne.style.display = "none";
};

btnCloseProjectTwo.onclick = function () {
  projectModalTwo.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == skillsModal) {
    skillsModal.style.display = "none";
  }

  if (e.target == projectModalOne) {
    projectModalOne.style.display = "none";
  }

  if (e.target == projectModalTwo) {
    projectModalTwo.style.display = "none";
  }
};
