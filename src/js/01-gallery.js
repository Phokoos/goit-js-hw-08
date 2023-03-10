// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const newGalleryEl = galleryItems.map(({preview, original, description}) =>
	`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

galleryEl.innerHTML = newGalleryEl;

new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});


