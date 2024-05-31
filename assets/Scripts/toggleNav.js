document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  const toggleNav = () => {
    const isActive = navLinks.classList.toggle("active");
    navToggle.classList.toggle("close");

    // Toggle the icon
    const icon = navToggle.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    // Update aria-expanded
    navToggle.setAttribute("aria-expanded", isActive);
  };

  navToggle.addEventListener("click", toggleNav);
  navToggle.addEventListener("touchstart", toggleNav);
  navToggle.addEventListener("touchend", toggleNav);

  // Set initial aria-expanded state
  navToggle.setAttribute("aria-expanded", "false");
});
