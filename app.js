import { default as galleryItems } from "./gallery-items.js";
const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector(".lightbox__button"),
  lightboxImage: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
};
refs.overlay.addEventListener("click", closeModal);
refs.btn.addEventListener("click", closeModal);
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
  if (event.code === "ArrowRight") {
    next();
  }
  if (event.code === "ArrowLeft") {
    previous();
  }
});
galleryItems.forEach((item) => {
  const img = document.createElement("img");
  img.setAttribute("src", item.preview);
  img.setAttribute("alt", item.description);
  img.setAttribute("data-source", item.original);
  img.setAttribute("class", "gallery__image");
  refs.gallery.append(img);
  img.addEventListener("click", openModal);
});
const images = document.querySelectorAll(".gallery__image");
const src = [];
function next() {
  images.forEach((image, index) => {
    if (
      refs.lightboxImage.getAttribute("src") ===
      image.getAttribute("data-source")
    ) {
      src.push(images[index + 1].getAttribute("data-source"));
    }
  });
  refs.lightboxImage.setAttribute("src", src.splice(0).join(""));
}
function previous() {
  images.forEach((image, index) => {
    if (
      refs.lightboxImage.getAttribute("src") ===
      image.getAttribute("data-source")
    ) {
      src.push(images[index - 1].getAttribute("data-source"));
    }
  });
  refs.lightboxImage.setAttribute("src", src.splice(0).join(""));
}
function openModal(event) {
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.setAttribute(
    "src",
    event.target.getAttribute("data-source")
  );
}
function closeModal() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.removeAttribute("src");
}
