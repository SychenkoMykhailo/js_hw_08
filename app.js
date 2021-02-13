import galleryItems from "./gallery-items.js";

// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   lightbox: document.querySelector(".js-lightbox"),
//   btn: document.querySelector(".lightbox__button"),
//   lightboxImage: document.querySelector(".lightbox__image"),
//   overlay: document.querySelector(".lightbox__overlay"),
// };
// refs.overlay.addEventListener("click", closeModal);
// refs.btn.addEventListener("click", closeModal);
// galleryItems.forEach((item) => {
//   const img = document.createElement("img");
//   img.setAttribute("src", item.preview);
//   img.setAttribute("alt", item.description);
//   img.setAttribute("data-source", item.original);
//   img.setAttribute("class", "gallery__image");
//   refs.gallery.append(img);
//   img.addEventListener("click", openModal);
// });
// function NextPrev(param) {
//   const images = document.querySelectorAll(".gallery__image");
//   const src = [];
//   images.forEach((image, index) => {
//     if (
//       refs.lightboxImage.getAttribute("src") ===
//       image.getAttribute("data-source")
//     ) {
//       if (param === "next") {
//         src.push(images[index + 1].getAttribute("data-source"));
//       } else if (param === "previous") {
//         src.push(images[index - 1].getAttribute("data-source"));
//       }
//     }
//   });
//   refs.lightboxImage.setAttribute("src", src.splice(0).join(""));
// }
// function openModal(event) {
//   refs.lightbox.classList.add("is-open");
//   refs.lightboxImage.setAttribute(
//     "src",
//     event.target.getAttribute("data-source")
//   );
//   window.addEventListener("keydown", keydownFunc);
// }
// function closeModal() {
//   refs.lightbox.classList.remove("is-open");
//   refs.lightboxImage.src = "";
//   refs.lightboxImage.removeAttribute("src");
//   window.removeEventListener("keydown", keydownFunc);
// }
// function keydownFunc(event) {
//   if (event.code === "Escape") {
//     closeModal();
//   }
//   if (event.code === "ArrowRight") {
//     NextPrev("next");
//   }
//   if (event.code === "ArrowLeft") {
//     NextPrev("previous");
//   }
// }

//=======================================================================

// Class Gallery:
const data = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector(".lightbox__button"),
  lightboxImage: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
};
class Gallery {
  constructor(data) {
    this.gallery = data.gallery;
    this.lightbox = data.lightbox;
    this.btn = data.btn;
    this.lightboxImage = data.lightboxImage;
    this.overlay = data.overlay;
  }
  createGallery() {
    this.overlay.addEventListener("click", this.closeModal.bind(this));
    this.btn.addEventListener("click", this.closeModal.bind(this));
    galleryItems.forEach((item) => {
      let img = document.createElement("img");
      img.setAttribute("src", item.preview);
      img.setAttribute("alt", item.description);
      img.setAttribute("data-source", item.original);
      img.setAttribute("class", "gallery__image");
      img.addEventListener("click", this.openModal.bind(this));
      this.gallery.append(img);
    });
    window.addEventListener("keydown", this.keydownFunc.bind(this));
  }
  closeModal() {
    this.lightbox.classList.remove("is-open");
    this.lightboxImage.src = "";
    this.lightboxImage.removeAttribute("src");
  }
  openModal(event) {
    this.lightbox.classList.add("is-open");
    this.lightboxImage.setAttribute(
      "src",
      event.target.getAttribute("data-source")
    );
  }
  keydownFunc(event) {
    if (event.code === "Escape") {
      this.closeModal();
    }
    if (event.code === "ArrowRight") {
      this.NextPrev("next");
    }
    if (event.code === "ArrowLeft") {
      this.NextPrev("previous");
    }
  }
  NextPrev(param) {
    const images = document.querySelectorAll(".gallery__image");
    const src = [];
    images.forEach((image, index) => {
      if (
        this.lightboxImage.getAttribute("src") ===
        image.getAttribute("data-source")
      ) {
        if (param === "next") {
          src.push(images[index + 1].getAttribute("data-source"));
        } else if (param === "previous") {
          src.push(images[index - 1].getAttribute("data-source"));
        }
      }
    });
    this.lightboxImage.setAttribute("src", src.splice(0).join(""));
  }
}
let gallery = new Gallery(data);
gallery.createGallery();
