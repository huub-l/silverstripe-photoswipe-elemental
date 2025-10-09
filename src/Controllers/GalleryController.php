<?php
namespace DorsetDigital\Elements\PhotoSwipe\Controllers;

use DNADesign\Elemental\Controllers\ElementController;
use SilverStripe\View\Requirements;
use SilverStripe\View\ThemeResourceLoader;

class GalleryController extends ElementController
{
    public function init() {
        parent::init();
        Requirements::javascript('dorsetdigital/silverstripe-photoswipe-elemental:client/dist/javascript/gallery.js', [
            'type' => 'module',
        ]);
        Requirements::css('dorsetdigital/silverstripe-photoswipe-elemental:client/dist/css/photoswipe.css');
    }
}