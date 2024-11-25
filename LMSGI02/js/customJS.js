// Configura la base URL automáticamente
const baseURL = window.location.hostname.includes("github.io")
    ? "/LMSGI02/"
    : "http://127.0.0.1:50000/";  // Asegúrate de que la base URL tenga la barra final '/'

// Depuración: Verifica las rutas
console.log("Base URL: ", baseURL);

// Establece o crea dinámicamente el elemento <base>
const baseElement = document.querySelector("base");
if (baseElement) {
    baseElement.setAttribute("href", baseURL);
} else {
    const newBaseElement = document.createElement("base");
    newBaseElement.setAttribute("href", baseURL);
    document.head.appendChild(newBaseElement);
}

// Función para cargar contenido HTML en un elemento específico
function loadHTML(file, elementId) {
    console.log(`Cargando HTML desde: ${file}`);  // Depuración de ruta
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

// Función para agregar el archivo CSS dinámicamente
function loadCSS(file) {
    console.log(`Cargando CSS desde: ${file}`);  // Depuración de ruta
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = file;  // La URL del archivo CSS que queremos cargar
    document.head.appendChild(linkElement);
}

// Función para agregar el archivo JS dinámicamente
function loadJS(file) {
    console.log(`Cargando JS desde: ${file}`);  // Depuración de ruta
    const scriptElement = document.createElement("script");
    scriptElement.src = file;  // La URL del archivo JS que queremos cargar
    scriptElement.defer = true;
    document.head.appendChild(scriptElement);
}

// Inserta el contenido en los elementos correspondientes cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
    // Cargar los archivos HTML en los elementos correspondientes
    loadHTML(`${baseURL}pages/htmlBase/nav.html`, "navbar");
    loadHTML(`${baseURL}pages/htmlBase/footer.html`, "footer");

    // Cargar los archivos CSS y JS
    loadCSS(`${baseURL}css/customCSS.css`);  // Cargar el CSS dinámicamente
    loadCSS(`${baseURL}css/indexStyle.css`);  // Agregar indexStyle.css también
    loadJS(`${baseURL}js/customJS.js`);  // Cargar el JavaScript dinámicamente
    loadJS(`${baseURL}js/bootstrap/bootstrap.bundle.min.js`);  // Agregar Bootstrap JS también
});