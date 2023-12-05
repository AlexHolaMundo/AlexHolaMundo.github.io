// footer.js

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "pie";

  const footerContent = document.createElement("div");
  footerContent.className = "pie";

  const title = document.createElement("h3");
  title.textContent = "Medic Pet";
  footerContent.appendChild(title);

  const contactInfo = document.createElement("div");
  contactInfo.className = "iconos";
  contactInfo.innerHTML = `
      <p>Teléfono: 07 257 0000</p>
      <p>Ubicación: Av. 1 de Mayo 1-50 y Av. 12 de Abril</p>
    `;
  footerContent.appendChild(contactInfo);

  footer.appendChild(footerContent);

  const credits = document.createElement("div");
  credits.className = "creditos";
  credits.innerHTML = "<p>Realizado por: Alex =)</p>";
  footer.appendChild(credits);

  return footer;
}

document.addEventListener("DOMContentLoaded", function () {
  const appContainer = document.getElementById("footer-alex");
  appContainer.appendChild(createFooter());
});
