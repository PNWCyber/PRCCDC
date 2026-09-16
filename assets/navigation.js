document.documentElement.classList.add("js");
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");

if (header && toggle && nav) {
  const closeMenu = () => {
    header.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector("span").textContent = "Menu";
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.querySelector("span").textContent = isOpen ? "Close" : "Menu";
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 720) closeMenu();
    },
    { passive: true },
  );
}
