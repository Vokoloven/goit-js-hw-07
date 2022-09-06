import { galleryItems } from './gallery-items.js';

// Change code below this line

const refs = {
  galleryBoxEl: document.querySelector('.gallery'),
};

const { galleryBoxEl } = refs;

galleryCreator();

function galleryCreator() {
  const galleryItemsMapper = galleryItems => {
    return galleryItems
      .map(
        ({ preview, original, description }) =>
          `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>
      `,
      )
      .join('');
  };
  return galleryBoxEl.insertAdjacentHTML(
    'beforeend',
    galleryItemsMapper(galleryItems),
  );
}

console.log(galleryBoxEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
