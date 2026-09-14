document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stack-section").forEach((el, i) => {
    el.style.zIndex = String(i + 1);
  });
});
