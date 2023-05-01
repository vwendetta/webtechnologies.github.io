// Fetch the data from the JSON file
fetch('./js/gallery.json')
  .then(response => response.json())
  .then(data => {
    // Create the HTML for the image gallery
    var galleryHtml = '<div class="gallery">';
    data.forEach(image => {
      galleryHtml += `
      <div class="gallery-row">
        <div class="gallery-item">         
          <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
          <div class="gallery-caption">${image.caption}</div>
        </div>
       </div>
      `;
    });
    galleryHtml += '</div>';

    // Append the HTML to the container div
    document.querySelector('.gallery-container').innerHTML = galleryHtml;
  });

var gallery = document.querySelector('.gallery-container');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var modalClose = document.querySelector('.modal-close');

// Add
// Add click event listener to gallery
gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
    var src = e.target.getAttribute('data-src');
    modalImage.src = src;
    modalImage.style.marginLeft = "auto";
    modalImage.style.marginTop = "20px";
    modalImage.style.display = "bock";
    modalImage.style.width = "60%";
    modal.style.display = 'block';
    modal.style.textAlign = 'center';
    }
    });
    
    // Add click event listener to modal close button
    modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    });
    
    // Add click event listener to modal background to close modal
    modal.addEventListener('click', function(e) {
    if (e.target === modal) {
    modal.style.display = 'none';
    }
    }); 
