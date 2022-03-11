const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



let currentTheme = "light"
const savedTheme = localStorage.getItem("theme")

if(savedTheme) {
    currentTheme = savedTheme
}

document.documentElement.setAttribute('data-theme', currentTheme);
document.getElementById("darkmode-toggler").addEventListener("click", () => {
    if(currentTheme === "light") {
        currentTheme = "dark"
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        currentTheme = "light"
        document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem("theme", currentTheme)
})








