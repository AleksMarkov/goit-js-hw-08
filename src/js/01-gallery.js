// Описаний в документації
//import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
//import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const cont = document.querySelector('.gallery');
cont.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
cont.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const imgGallery = event.target;
  const original = imgGallery.dataset.source;
  const description = imgGallery.alt;

  const instance = basicLightbox.create(
    `<div>
      <img  src="${original}" alt="${description}" width="1140" />
    </div>`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  instance.show();

  function onEscPress(clk) {
    if (clk.key === 'Escape') {
      instance.close();
    }
  }
}

function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}
