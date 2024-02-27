const btn_up = document.getElementById("icon-up")

document.addEventListener("DOMContentLoaded", () => {
    function handleScroll() {
        if (window.scrollY >= window.innerHeight) {
            btn_up.style.visibility = "visible"
            btn_up.style.opacity = "1"
        } else {
            btn_up.style.visibility = ""
            btn_up.style.opacity = ""
        }
    }
    window.addEventListener("scroll", handleScroll);
})


window.sr = ScrollReveal();
sr.reveal('.icon-footer', {
    duration: 800,
    origin: 'bottom',
    easing: "ease-out",
    reset: false,
    distance: '50px',
    interval: 200,
    mobile: true
})

/* sr.reveal('.nav', {
    duration: 800,
    origin: 'bottom',
    reset: false,
    distance: '-100px',
}) */