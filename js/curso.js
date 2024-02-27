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

const btn_temario = document.getElementById("btn-temario")
btn_temario.addEventListener("click", () => {
    Swal.fire({
        title: `<strong style="color:#1E1D1E">Información del Curso</strong>`,
        html: `
        <div class="container-alert" style="width: 100%; display: flex; flex-direction: column; gap: 0.35em;">
        <div class="container-alert-item"
            style="width: 90%; margin: 0 auto;  display: flex; gap: 0.85em; flex-wrap: wrap;"><b
                style="color:#19255E; width: 200px; text-align: center;">Sesiones
                Semanales:</b><span>
                Sabados y
                Domingos.
            </span></div>
        <div class="container-alert-item"
            style="width: 90%; margin: 0 auto; display: flex; gap: 0.85em; flex-wrap: wrap;"><b
                style="color:#19255E; width: 200px;text-align: center;">Horas Academicas:</b><span>
                Total 92h.
            </span></div>
        <div class="container-alert-item"
            style="width: 90%; margin: 0 auto; display: flex; gap: 0.85em; flex-wrap: wrap;"><b
                style="color:#19255E; width: 200px;text-align: center;">Metodologia:</b><span
                style="text-align: center;">
                100% practico.
            </span></div>
        <div class="container-alert-item"
            style="width: 90%; margin: 0 auto; display: flex; gap: 0.85em; flex-wrap: wrap;"><b
                style="color:#19255E; width: auto;">11 reuniones Virtuales y una conferencia
                Presencial</b></div>
    </div>


    `,
        confirmButtonText: "Salir",
        confirmButtonColor: "#b80d0d",
        showCloseButton: true,
        cancelButtonAriaLabel: "Thumbs down",
    });
});

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