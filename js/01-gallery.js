import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryWrapper = document.querySelector(".gallery");
const galleryItemsArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryWrapper.insertAdjacentHTML("beforeend", galleryItemsArray);

const instance = basicLightbox.create(
  `<img src="" width="1280" height="auto">`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscKeyPress);
    },

    onClose: (instance) => {
      document.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function onEscKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}

const handleOpenImageFromGalleryEvent = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = event.target.dataset.source;

  instance.show();
};

galleryWrapper.addEventListener("click", handleOpenImageFromGalleryEvent);
