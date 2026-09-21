document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector("nav.topnav ul");
  if (!toggle || !list) return;

  toggle.addEventListener("click", () => {
    const isOpen = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  list.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
