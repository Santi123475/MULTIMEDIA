class GestorDioses {
    constructor() {
        this.dioses = [
            { nombre: "Zeus", imagen: "../images/zeus.jpg", descripcion: "Dios del trueno y el rey del Olimpo." },
            { nombre: "Poseidon", imagen: "../images/poseidon.jpg", descripcion: "Dios del mar y los terremotos." },
            { nombre: "Hades", imagen: "../images/hades.jpg", descripcion: "Dios del inframundo." },
            { nombre: "Hera", imagen: "../images/hera.jpg", descripcion: "Diosa del matrimonio y la familia." },
            { nombre: "Ares", imagen: "../images/ares.jpg", descripcion: "Dios de la guerra." },
            { nombre: "Atenea", imagen: "../images/Atenea.webp", descripcion: "Diosa de la sabiduría y la estrategia." },
            { nombre: "Apolo", imagen: "../images/apolo.jpg", descripcion: "Dios del sol, la música y la profecía." },
            { nombre: "Artemisa", imagen: "../images/artemisa.jpg", descripcion: "Diosa de la caza y la naturaleza." },
            { nombre: "Hefesto", imagen: "../images/hefesto.webp", descripcion: "Dios del fuego y la forja." },
            { nombre: "Afrodita", imagen: "../images/afrodita.jpg", descripcion: "Diosa del amor y la belleza." },
            { nombre: "Hermes", imagen: "../images/hermes.webp", descripcion: "Dios mensajero y del comercio." },
            { nombre: "Deméter", imagen: "../images/demeter.jpg", descripcion: "Diosa de la agricultura y la cosecha." }
        ];
        this.tarjetasContainer = document.getElementById("tarjetasContainer");
        this.cargarTarjetas();
    }

    cargarTarjetas() {
        this.dioses.forEach(dios => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");
            tarjeta.innerHTML = `
                <img src="${dios.imagen}" alt="${dios.nombre}">
                <p>${dios.nombre}</p>
            `;
            tarjeta.onclick = () => this.abrirModal(dios);
            this.tarjetasContainer.appendChild(tarjeta);
        });
    }

    abrirModal(dios) {
        document.getElementById("modalImagen").src = dios.imagen;
        document.getElementById("modalNombre").textContent = dios.nombre;
        document.getElementById("modalDescripcion").textContent = dios.descripcion;
        document.getElementById("modal").classList.remove("oculto");

        document.getElementById("masInfoBtn").onclick = function () {
            window.location.href = `../detalles/${dios.nombre.toLowerCase()}.html`;
        };
    }
}

function cerrarModal(event) {
    // Verifica si el clic es fuera de la caja del modal
    if (event.target.id === "modal") {
        document.getElementById("modal").classList.add("oculto");
    }
}

new GestorDioses();
