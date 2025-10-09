<figure class="col mb-4 text-center">
    <% with $ScaleWidth(1024).Convert('webp') %>
    <a href="$URL" data-pswp-width="$Width" data-pswp-height="$Height" target="_blank">
    <% end_with %>
    <% with $Fill(150,150).Convert('webp') %>
        <img src="$URL" class="img-fluid img-thumbnail" width="$Width" height="$Height" alt="$Top.Title Image" loading="lazy">
    <% end_with %>
    </a>
</figure>