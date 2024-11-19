document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("nav ul li a");
  const projectContainers = document.querySelectorAll(".relative.group");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const filter = this.getAttribute("href").substring(1);

      projectContainers.forEach((container) => {
        if (filter === "all" || container.getAttribute("data-id") === filter) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
    });
  });
});
