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