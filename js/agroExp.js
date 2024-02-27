const cont_lod = document.getElementById("container-lod")

window.onload = function () {
    cont_lod.style.visibility = "hidden"
    cont_lod.style.opacity = "0"
}

const burguer = document.getElementById("menu_burguer")
const checkbox = document.getElementById("checkbox")
const nav_container = document.getElementById("nav_container")


checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        nav_container.style.transform = "translateX(0%)"
        nav_container.style.opacity = 1
    }
    else {
        nav_container.style.transform = ""
        nav_container.style.opacity = ""
    }
})

const nav = document.getElementById("nav");
let ubicacionPrincipal = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.innerWidth > 720) {
        let scrollActual = window.scrollY;

        if (scrollActual > ubicacionPrincipal) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
        ubicacionPrincipal = scrollActual;
    }
});