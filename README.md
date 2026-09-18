# silverstripe-photoswipe-elemental

> **This package has been superseded by [dorsetdigital/silverstripe-photoswipe](https://github.com/DorsetDigital/silverstripe-photoswipe).**

Elemental support is now included directly in `dorsetdigital/silverstripe-photoswipe` from version 2.0.0. New Silverstripe CMS 6 projects should use the main PhotoSwipe module instead of installing this package.

This repository remains available for existing Silverstripe CMS 4 and 5 installations, but no new feature development is planned here.

## Silverstripe CMS 6

Install the main module:

```bash
composer require dorsetdigital/silverstripe-photoswipe:^2
```

If `dnadesign/silverstripe-elemental` is installed, a **PhotoSwipe Gallery** block is automatically available. No separate Elemental package or PhotoSwipe-specific YAML configuration is required.

For existing sites upgrading from this package, please read the upgrade notes in the [silverstripe-photoswipe README](https://github.com/DorsetDigital/silverstripe-photoswipe#upgrading-from-1x). Version 2 includes an experimental migration task for legacy Elemental gallery records; back up and test the database before using it on a production site.

## Legacy requirements

The final versions of this package target:

- Silverstripe CMS 4 or 5
- bummzack/sortablefile 2.x
- dnadesign/silverstripe-elemental

## Legacy installation

Existing CMS 4/5 projects can continue to install this package with:

```bash
composer require dorsetdigital/silverstripe-photoswipe-elemental
```

After installation, run a development build and add the PhotoSwipe gallery block to an Elemental page.

## Credits

- [PhotoSwipe](https://photoswipe.com/)
- [SortableFile](https://github.com/bummzack/sortablefile)
- [Silverstripe Elemental](https://github.com/silverstripe/silverstripe-elemental)
- Werner Krauss for translation work and Elemental 4 updates
