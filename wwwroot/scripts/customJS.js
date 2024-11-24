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