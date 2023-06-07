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
       <img class="${original}" 
       src="${preview}" 
       alt=""
       title="${description}" />
   </a>
</li>`
    }).join("")
}
// Usage
let gallery = new SimpleLightbox('.gallery a');
gallery.on("captionPosition.simplelightbox", function () {});

// galleryItems.on('show.simplelightbox', function () {
//     console.log(galleryItems);
// });
// Markup
// captionDelay Default '' Type string
// console.log(lightbox.captionPosition() );
