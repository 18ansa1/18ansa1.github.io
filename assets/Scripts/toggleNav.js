document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  const toggleNav = () => {
    navLinks.classList.toggle("active");
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
  };

  navToggle.addEventListener("click", toggleNav);
  navToggle.addEventListener("touchstart", toggleNav);
  navToggle.addEventListener("touchend", toggleNav);
});
