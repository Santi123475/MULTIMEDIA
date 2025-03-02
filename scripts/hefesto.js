function regresar() {
    window.location.href = "../indexx/index.html";
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "200px";
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
function regresar() {
    window.history.back();
}


window.addEventListener("load", function() {
    const audio = document.querySelector("audio");
    audio.muted = false;
    audio.play();
});

const botonSonido = document.getElementById("botonSonido");
const audios = document.querySelectorAll("audio");
let sonidoActivo = false;

botonSonido.addEventListener("click", function () {
    sonidoActivo = !sonidoActivo;

    audios.forEach(audio => {
        audio.muted = sonidoActivo;
    });

    if (sonidoActivo) {
        botonSonido.textContent = "🔇 Activar Sonido";
    } else {
        botonSonido.textContent = "🔊 Desactivar Sonido";
    }
});