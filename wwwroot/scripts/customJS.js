// Cargar el archivo nav.html en el contenedor
fetch('base/nav.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el nav.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        // Llamar a la función para ocultar el elemento correspondiente
        hideCurrentNavItem();
    })
    .catch(error => {
        console.error('Error:', error);
    });

function hideCurrentNavItem() {
    // Obtener la URL de la página actual
    const currentPage = window.location.pathname.split('/').pop();

    // Seleccionar todos los elementos de navegación
    const navItems = document.querySelectorAll('.nav-item');

    // Recorrer los elementos de navegación y ocultar el correspondiente
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === currentPage) {
            item.hidden = true; // Ocultar el elemento correspondiente
        }
    });
}

// Cargar el archivo footer.html en el contenedor
fetch('base/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el footer.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });