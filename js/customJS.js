// Configura la base URL automáticamente
const baseURL = window.location.hostname.includes("github.io")
    ? "https://zimmcl.github.io/LMSGI02/"
    : "http://127.0.0.1:50000";

const baseElement = document.querySelector("base");

// Establece o crea dinámicamente el elemento <base>
if (baseElement) {
    baseElement.setAttribute("href", baseURL);
} else {
    const newBaseElement = document.createElement("base");
    newBaseElement.setAttribute("href", baseURL);
    document.head.appendChild(newBaseElement);
}

// Función para cargar contenido HTML en un elemento específico
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Error al cargar ${file}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.innerHTML = data;
            } else {
                console.error(`Elemento con ID "${elementId}" no encontrado.`);
            }
        })
        .catch(error => console.error(error));
}

// Inserta el contenido en los elementos correspondientes cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
    loadHTML(`${baseURL}/pages/htmlBase/nav.html`, "navbar");
    loadHTML(`${baseURL}/pages/htmlBase/footer.html`, "footer");
});