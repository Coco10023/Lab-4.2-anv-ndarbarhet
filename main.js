document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("nav-list");

  if (!toggle || !navList) return;

  function closeMenu() {
    navList.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    navList.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    const isOpen = navList.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Klick på länk stänger menyn (mobil)
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });

  // Resize: desktop = alltid synlig meny
  function handleResize() {
    if (window.innerWidth > 900) {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // ESC stänger menyn
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
});
