document.addEventListener("DOMContentLoaded", function () {
  createNavbar();
});

function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg bg-body-tertiary";

  const container = document.createElement("div");
  container.className = "container-fluid";
  navbar.appendChild(container);

  const brand = document.createElement("a");
  brand.className = "navbar-brand";
  brand.href = "../index.html";
  brand.textContent = "Medic Pet";
  container.appendChild(brand);

  const togglerButton = document.createElement("button");
  togglerButton.className = "navbar-toggler";
  togglerButton.type = "button";
  togglerButton.setAttribute("data-bs-toggle", "collapse");
  togglerButton.setAttribute("data-bs-target", "#navbarSupportedContent");
  togglerButton.setAttribute("aria-controls", "navbarSupportedContent");
  togglerButton.setAttribute("aria-expanded", "false");
  togglerButton.setAttribute("aria-label", "Toggle navigation");

  const togglerIcon = document.createElement("span");
  togglerIcon.className = "navbar-toggler-icon";
  togglerButton.appendChild(togglerIcon);

  container.appendChild(togglerButton);

  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse navbar-collapse";
  collapseDiv.id = "navbarSupportedContent";
  container.appendChild(collapseDiv);

  const navList = document.createElement("ul");
  navList.className = "navbar-nav me-auto mb-2 mb-lg-0";
  collapseDiv.appendChild(navList);

  addNavItem(navList, "Inicio", "../index.html");
  addNavItem(navList, "Servicios", "../pages/servicios.html");
  addNavItem(navList, "Galería", "../pages/galeria.html");
  addNavItem(navList, "Clinica", "../pages/clinica.html");
  addNavItem(navList, "Contacto", "../pages/contacto.html");
  addNavItem(navList, "Adoptar", "../pages/comprar.html");
  addNavItem(navList, "Adoptar", "../pages/firebase.html");

  document.body.prepend(navbar);
}

function addNavItem(parent, text, link) {
  const navItem = document.createElement("li");
  navItem.className = "nav-item";

  const navLink = document.createElement("a");
  navLink.className = "nav-link";
  navLink.href = link;
  navLink.textContent = text;

  navItem.appendChild(navLink);
  parent.appendChild(navItem);
}
