function toggleMenu() {
    // Targeting the menu-links and hamburger-icon elements from HTML
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Add/remove the open class to the elements
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}