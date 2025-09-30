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


document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".film-dispo");
  const filmCount = articles.length;

  const footer = document.querySelector("footer");
  const filmCountText = document.createElement("p");
  filmCountText.textContent = `Catalogue : ${filmCount} films disponibles`;
  footer.appendChild(filmCountText);
});


/*## **3. Marquer un film comme "vu"**

**Objectif :** Ajouter un badge "Vu" sur les films au clic

**Comportement :**

- Clic sur une carte de film → ajout de la classe `.watched`
- Un badge "✓ Vu" apparaît visuellement (géré par CSS)
- Re-clic → retrait du badge

**Concepts utilisés :**

- Event listener sur plusieurs éléments
- `classList.toggle()`
- `event.target`*/

