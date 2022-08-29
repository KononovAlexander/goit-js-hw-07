import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
function addPictures(object) {
    object.forEach(element => {
        gallery.insertAdjacentHTML(
            "afterbegin",
            `<div class="gallery__item">
            <a class="gallery__link" href="${element.original}">
                <img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/>
            </a>
            </div>`
        )        
    });
}

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    console.log('target: ', target);
    const instance = basicLightbox.create(`
            <img src="${target.getAttribute('data-source')}" alt="${target.getAttribute('alt')}"/>

    `);
    instance.show();
 });


addPictures(galleryItems);



