document.documentElement.classList.add("js");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const closeNav = () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
};
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNav();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeNav();
    toggle.focus();
  }
});
