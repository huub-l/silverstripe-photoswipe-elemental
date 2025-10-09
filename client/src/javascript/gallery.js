import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

// Initialize PhotoSwipe for each gallery
document.querySelectorAll('.photoswipegallery').forEach((galleryEl) => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: galleryEl,
        children: 'a', // Each <a> inside the gallery is an item
        pswpModule: PhotoSwipe,
        // Optional: Add UI options
        padding: { top: 20, bottom: 20, left: 20, right: 20 },
        bgOpacity: 0.9,
        showHideAnimationType: 'fade',
    });

    lightbox.init();
});