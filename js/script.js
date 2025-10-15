// ===================================
// EXERCICE 1 : Afficher/masquer sections
// ===================================

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


// ===================================
// EXERCICE 2 : Compter les films disponibles
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".film-dispo");
  const filmCount = articles.length;

  const footer = document.querySelector("footer");
  const filmCountText = document.createElement("p");
  filmCountText.textContent = `Catalogue : ${filmCount} films disponibles`;
  footer.appendChild(filmCountText);
});


// ===================================
// EXERCICE 3 : Marquer un film comme "vu"
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  const filmCards = document.querySelectorAll(".film-card");

  filmCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("watched");
      if (!card.querySelector(".badge-watched")) {
        const badge = document.createElement("span");
        badge.classList.add("badge-watched");
        badge.textContent = "✓ Vu";
        card.appendChild(badge);
      }
    });
  });
});


// ===================================
// EXERCICE 4 : Recherche
// ===================================