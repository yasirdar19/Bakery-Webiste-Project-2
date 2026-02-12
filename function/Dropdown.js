

  function toggleDropdown() {
    const content = document.getElementById("dropdownContent");
    const btn = document.querySelector(".dropbtn");

    const isOpen = content.classList.toggle("show");
    // Update accessibility attributes
    content.setAttribute("aria-hidden", String(!isOpen));
    btn.setAttribute("aria-expanded", String(isOpen));
  }

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
      const content = document.getElementById("dropdownContent");
      const btn = document.querySelector(".dropbtn");
      if (content.classList.contains("show")) {
        content.classList.remove("show");
        content.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });

