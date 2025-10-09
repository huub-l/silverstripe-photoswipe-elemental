<% if $Title && $ShowTitle %>
    <div class="gallerytitle_holder">
        <h2 class="gallerytitle">$Title</h2>
    </div>
<% end_if %>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 py-4 photoswipegallery">
    <% loop $SortedImages %>
        <% include DorsetDigital\\Elements\\PhotoSwipe\\Models\\GalleryImage %>
    <% end_loop %>
</div>

