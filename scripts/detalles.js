document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreDios = urlParams.get("nombre");

    const dioses = {
        "Zeus": { imagen: "../images/zeus.jpg", descripcion: "Dios del trueno y el rey del Olimpo." },
        "Poseidón": { imagen: "../images/poseidon.jpg", descripcion: "Dios del mar y los terremotos." },
        "Hades": { imagen: "../images/hades.jpg", descripcion: "Dios del inframundo." },
        "Hera": { imagen: "../images/hera.jpg", descripcion: "Diosa del matrimonio y la familia." },
        "Ares": { imagen: "../images/ares.jpg", descripcion: "Dios de la guerra." },
        "Atenea": { imagen: "../images/Atenea.webp", descripcion: "Diosa de la sabiduría y la estrategia." },
        "Apolo": { imagen: "../images/apolo.jpg", descripcion: "Dios del sol, la música y la profecía." },
        "Artemisa": { imagen: "../images/artemisa.jpg", descripcion: "Diosa de la caza y la naturaleza." },
        "Hefesto": { imagen: "../images/hefesto.webp", descripcion: "Dios del fuego y la forja." },
        "Afrodita": { imagen: "../images/afrodita.jpg", descripcion: "Diosa del amor y la belleza." },
        "Hermes": { imagen: "../images/hermes.webp", descripcion: "Dios mensajero y del comercio." },
        "Deméter": { imagen: "../images/demeter.jpg", descripcion: "Diosa de la agricultura y la cosecha." }
    };

    if (dioses[nombreDios]) {
        document.getElementById("nombreDios").textContent = nombreDios;
        document.getElementById("imagenDios").src = dioses[nombreDios].imagen;
        document.getElementById("descripcionDios").textContent = dioses[nombreDios].descripcion;
    } else {
        document.body.innerHTML = "<h1>Dios no encontrado</h1><button onclick='regresar()'>Regresar</button>";
    }
});

function regresar() {
    window.location.href = "../indexx/index.html";
}
