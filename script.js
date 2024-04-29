// Remplacez avec vos données d'image réelles ou un chargement dynamique
const donnéesImages = [
    { src: "footer.PNG", alt: "Image 1" },
    { src: "Capture.PNG", alt: "Image 2" },
    { src: "authorForm.PNG", alt: "Image 3" },
    // Ajoutez plus d'objets image ici
];

const grillePhotos = document.querySelector('.grille-photos');

donnéesImages.forEach(image => {
    const élémentPhoto = document.createElement('div');
    élémentPhoto.classList.add('élément-photo');

    const élémentImage = document.createElement('img');
    élémentImage.src = image.src;
    élémentImage.alt = image.alt;

    const légende = document.createElement('figcaption');
    légende.textContent = image.alt;

    élémentPhoto.appendChild(élémentImage);
    élémentPhoto.appendChild(légende);

    grillePhotos.appendChild(élémentPhoto);
});
