var skillsModal = document.getElementById("skillsModal");
var btnSkills = document.getElementById("btnSkillsModal");
var btnSkillsClose = document.getElementById("closeSkillsModal");

btnSkills.onclick = function () {
  skillsModal.style.display = "flex";
};

btnSkillsClose.onclick = function () {
  skillsModal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == skillsModal) {
    skillsModal.style.display = "none";
  }
};
