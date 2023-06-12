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
       <img loading="lazy"
       class="gallery__image" 
       data-src="${preview}" 
       alt="${description}"
       />
   </a>
</li>`
    }).join("")
}
// Usage
const gallery__item = new SimpleLightbox('.gallery__item a', { captionsData: "alt", captionDelay: 250});
//  Ленивая загрузка изображений - lazysizes
const lazyImages = document.querySelectorAll('img[data-src]');
if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');
    addSrcAttrToLazyImages();
} else {
    console.log('Браузер НЕ поддерживает lazyload');
    addLazySizesScript();
}

function addSrcAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

function addLazySizesScript() {
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
    script.integrity =
        'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
}