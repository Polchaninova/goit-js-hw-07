import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Creating and rendering markup from the galleryItems data array and provided gallery item template.

const galleryItemsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup(galleryItems);
// console.log(cardsMarkup);

galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarkup);
// 2 
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick)
// 1
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`
    }).join("")
}
// preventDefault()
// Реализация делегирования на ul.gallery 
// и получение url большого изображения.
// 2
function onGalleryItemsContainerClick(e) {
    e.preventDefault()
    const isGallerySwatchEl = e.target.classList.contains("gallery__image");
    if (!isGallerySwatchEl) {
        return;
    }
    const swatchEl = e.target;
    const parentGalleryCard = swatchEl.closest(".gallery")
    console.log(swatchEl.dataset.source);
    onModalOpen(swatchEl.dataset.source)
}
let instance;
function onModalOpen(source) {
    instance = basicLightbox.create(`
    <img src="${source}">
    `)
    instance.show()
    document.addEventListener("keydown", onModalClose)
}
// onModalOpen:(instance) {}
// 
function onModalClose(e) {
    if (e.which === 27) {
        e.preventDefault()
        instance.close(() => console.log('lightbox not visible anymore'))
        document.removeEventListener("keydown", onModalClose)
    }
}
// onModalClose:(instance){}

