// Configura la base URL automáticamente
const baseURL = window.location.hostname.includes("github.io")
    ? "/LMSGI02"
    : "http://127.0.0.1:50000";

document.querySelector("base").setAttribute("href", baseURL);

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Error al cargar ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Inserta el contenido en los elementos correspondientes
document.addEventListener("DOMContentLoaded", () => {
    loadHTML(`${baseURL}/base/nav.html`, "navbar");
    loadHTML(`${baseURL}/base/footer.html`, "footer");
});