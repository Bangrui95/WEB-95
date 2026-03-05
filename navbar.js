document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  // ✅ 核心修正：加入 ""，防止在根目录下路径出错
  const mainPages = ["index.html", "work.html", "info.html", "contact.html", "gallery.html", ""];
  const isMainPage = mainPages.includes(page);
  const prefix = isMainPage ? '' : '../';

  const navbarHTML = `
    <nav class="navbar">
      <a href="${prefix}index.html" class="nav-left-link">
        <div class="nav-left">
          <div class="name-line">DESIGN 95</div>
          <div class="name-line">BANGRUI WANG</div>
        </div>
      </a>
      <div class="nav-right">
        <a href="${prefix}work.html" class="nav-link">WORK</a>
        <a href="${prefix}info.html" class="nav-link">INFO</a>
        <a href="${prefix}gallery.html" class="nav-link">GALLERY</a>
        <a href="${prefix}contact.html" class="nav-link">CONTACT</a>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});