function setStockValue(stockStatus) {
    localStorage.setItem("productStock", stockStatus);
}

window.onload = function() {
    const stockStatus = localStorage.getItem("productStock"); // Obtener el valor de localStorage
    const button = document.getElementById("addToCartButton");

    if (stockStatus === "false") {
        // Si está agotado (false), deshabilitar el botón
        button.disabled = true;
        button.style.backgroundColor = "lightgrey";
        button.style.cursor = "not-allowed";
    } 
};


function openDisclaimer() {
    document.getElementById("disclaimerPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeDisclaimer() {
    document.getElementById("disclaimerPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}