import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const makegalleryItemsMarkur = galleryItems.map(galleryItem => {
    const creatingNewModuleInHtml = 
    `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source= "${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </div>`;
    const addGalleryEl = galleryRef.insertAdjacentHTML('afterbegin',creatingNewModuleInHtml);
    
}).join("");

galleryRef.addEventListener("click", onClick);
const instance = basicLightbox.create(`
    <div class="modal">
        <img src=" " width="800" height="600">
    </div>
`);

function onClick (e) { 
   e.preventDefault();

if (e.target.nodeName !== 'IMG') {
  return;
}
instance.element().querySelector('img').src = e.target.dataset.source;
instance.show();
}