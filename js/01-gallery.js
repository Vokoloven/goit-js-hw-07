import { galleryItems } from './gallery-items.js';

// Change code below this line

const refs = {
  galleryBoxEl: document.querySelector('.gallery'),
};

galleryCreator();

function galleryCreator() {
  const galleryItemsMapper = galleryItems => {
    return galleryItems
      .map(
        ({ preview, original, description }) =>
          `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`,
      )
      .join('');
  };
  return refs.galleryBoxEl.insertAdjacentHTML(
    'beforeend',
    galleryItemsMapper(galleryItems),
  );
}

// console.log(refs.galleryBoxEl.children);

refs.galleryBoxEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  // console.log(e.target.dataset.source);

  const originalImageRef = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageRef}" >
  `);

  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close(window.removeEventListener('keydown', onEscKeyPress));
    }
  }
}
