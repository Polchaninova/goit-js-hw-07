import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryItemsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup(galleryItems);
// console.log(cardsMarkup);

galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarkup);
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `

    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" 
       src="${preview}" 
       alt="${description}"
       />
   </a>
</li>`
    }).join("")
}
// Usage
const gallery__item = new SimpleLightbox('.gallery__item a', { captionsData: "alt", captionDelay: 250 });

