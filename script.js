const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("clicl", () => {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))