// ----------------------
// Elements
// ----------------------
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const links = document.querySelectorAll(".dropdown-container a");
const sections = document.querySelectorAll("main section");
const welcome = document.getElementById("welcome");

// ----------------------
// Hamburger toggle (mobile)
// ----------------------
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 600 && sidebar.classList.contains("active")) {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove("active");
        }
    }
});

// ----------------------
// Dropdown toggle in sidebar
// ----------------------
dropdownBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const container = btn.nextElementSibling;
        container.classList.toggle("show");
    });
});

// ----------------------
// Content switching
// ----------------------
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Highlight active link
        links.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");

        // Hide all sections and show target
        sections.forEach(sec => sec.classList.remove("active"));
        const targetId = link.dataset.chapter;
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.add("active");

        // Close sidebar on mobile
        if (window.innerWidth <= 600) sidebar.classList.remove("active");
    });
});

