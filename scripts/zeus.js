function regresar() {
    window.location.href = "../index.html";
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
