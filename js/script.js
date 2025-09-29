document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    const targetSelector = button.getAttribute("data-target");
    const targetSection = document.querySelector(targetSelector);

    button.addEventListener("click", () => {
      targetSection.classList.toggle("d-none");

      if (targetSection.classList.contains("d-none")) {
        button.textContent = "Afficher";
      } else {
        button.textContent = "Masquer";
      }
    });
  });
});