// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire en hexadécimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événement pour changer la couleur de la boîte
    changeColorBtn.addEventListener('click', function() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
