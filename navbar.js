document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  const mainPages = [
    "index.html",
    "work.html",
    "system.html",
    "info.html",
    "contact.html",
    "gallery.html",
    ""
  ];

  const isMainPage = mainPages.includes(page);
  const prefix = isMainPage ? "" : "../";

  const navbarHTML = `
    <nav class="navbar">
      <a href="${prefix}index.html" class="nav-left-link">
        <div class="nav-left">
          <div class="name-line">DESIGN 95</div>
          <div class="name-line">BANGRUI WANG</div>
        </div>
      </a>

      <!-- Desktop links -->
      <div class="nav-right">
        <a href="${prefix}work.html" class="nav-link">DESIGN</a>
        <a href="${prefix}system.html" class="nav-link">TECH</a>
        <a href="${prefix}info.html" class="nav-link">INFO</a>
        <a href="${prefix}gallery.html" class="nav-link">GALLERY</a>
        <a href="${prefix}contact.html" class="nav-link">CONTACT</a>
      </div>

      <!-- Mobile burger -->
      <button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- Fullscreen overlay menu (mobile) -->
    <div class="nav-overlay" aria-hidden="true">
      <div class="nav-overlay-panel">
        <a href="${prefix}work.html" class="nav-overlay-link">DESIGN</a>
        <a href="${prefix}system.html" class="nav-overlay-link">TECH</a>
        <a href="${prefix}info.html" class="nav-overlay-link">INFO</a>
        <a href="${prefix}gallery.html" class="nav-overlay-link">GALLERY</a>
        <a href="${prefix}contact.html" class="nav-overlay-link">CONTACT</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  const burger = document.querySelector(".nav-burger");
  const overlay = document.querySelector(".nav-overlay");

  function openMenu() {
    document.documentElement.classList.add("nav-open");
    burger.setAttribute("aria-expanded", "true");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    document.documentElement.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-hidden", "true");
  }

  burger.addEventListener("click", () => {
    const isOpen = document.documentElement.classList.contains("nav-open");
    isOpen ? closeMenu() : openMenu();
  });

  // click outside (overlay background) to close
  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-overlay-link")) {
      closeMenu();
    }
  });

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // close after clicking a link
  overlay.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
});