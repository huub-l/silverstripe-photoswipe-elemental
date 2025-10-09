import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

const galleryElements = document.querySelectorAll('.photoswipegallery');

galleryElements.forEach(el => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '#my-gallery',
        children: 'a',
        pswpModule: () => import('./photoswipe.esm.js')
    });
    lightbox.init();
});


