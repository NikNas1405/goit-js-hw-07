import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryWrapper = document.querySelector(".gallery");
const galleryItemsArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryWrapper.insertAdjacentHTML("beforeend", galleryItemsArray);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  //   captionPosition: "bottom",
  captionDelay: 250,
});
