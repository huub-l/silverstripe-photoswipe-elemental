"use strict";

var _photoswipeLightboxEsm = _interopRequireDefault(require("https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js"));
var _photoswipeEsm = _interopRequireDefault(require("https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Initialize PhotoSwipe for each gallery
document.querySelectorAll('.photoswipegallery').forEach(function (galleryEl) {
  var lightbox = new _photoswipeLightboxEsm["default"]({
    gallery: galleryEl,
    children: 'a',
    // Each <a> inside the gallery is an item
    pswpModule: _photoswipeEsm["default"],
    // Optional: Add UI options
    padding: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    },
    bgOpacity: 0.9,
    showHideAnimationType: 'fade'
  });
  lightbox.init();
});
//# sourceMappingURL=../../dist/javascript/maps/gallery.js.map
