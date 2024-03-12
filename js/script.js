const video = document.getElementById("video")
const btn_est = document.getElementById("btn_estudios");
const cont_lod = document.getElementById("container-lod")

window.onload = function () {
    cont_lod.style.visibility = "hidden"
    cont_lod.style.opacity = "0"
}


btn_est.addEventListener("click", () => {
    Swal.fire({
        title: "<strong>Datos sobre mi</strong>",
        html: `
    Administración de negocios internacionales <b> (ADEX)</b> , Diplomado internacional en Comercio Exterior, importaciones y agro exportaciones <b>(ADEX)</b>.,   <b>NEGOCIOS INTERNACIONALES UCV</b>,
    `,
        confirmButtonText: "Salir",
        confirmButtonColor: "#b80d0d",
        showCloseButton: true,
        cancelButtonAriaLabel: "Thumbs down",
    });
});




document.addEventListener('DOMContentLoaded', function () {
    video.addEventListener('loadeddata', function () {
        video.play();
    });
});

const burguer = document.getElementById("menu_burguer")
const checkbox = document.getElementById("checkbox")
const nav_container = document.getElementById("nav_container")
const body = document.querySelector("body")

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        nav_container.style.transform = "translateX(0%)"
        nav_container.style.opacity = 1
        body.style.overflow="hidden"
    }
    else {
        nav_container.style.transform = ""
        nav_container.style.opacity = ""
        body.style.overflow=""
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

