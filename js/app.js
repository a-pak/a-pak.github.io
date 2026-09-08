const navbar = document.getElementById("navbar");

function updateNavbar() {
    if (!navbar) return;
    const threshold = Math.min(window.innerHeight * 0.35, 280);
    navbar.classList.toggle("scrolled", window.scrollY > threshold);
}

updateNavbar();
document.addEventListener("scroll", updateNavbar, { passive: true });

document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navMenu");
        if (menu && menu.classList.contains("show") && window.bootstrap) {
            window.bootstrap.Collapse.getInstance(menu)?.hide();
        }
    });
});
