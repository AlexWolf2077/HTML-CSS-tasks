const fullPhoto = document.querySelector('.full-photo');
const thumbnails = document.querySelectorAll('.gallery__photo-preview');
const arrow1 = document.querySelector('.gallery__photo-previews a:first-child');
const arrow2 = document.querySelector('.gallery__photo-previews a:last-child');

arrow1.addEventListener('click', function(event) {
  event.preventDefault();
  const firstThumbnail = thumbnails[0];
  const lastThumbnail = thumbnails[thumbnails.length - 1];
  lastThumbnail.parentNode.insertBefore(firstThumbnail, lastThumbnail.nextSibling);
});

arrow2.addEventListener('click', function(event) {
  event.preventDefault();
  const firstThumbnail = thumbnails[0];
  const lastThumbnail = thumbnails[thumbnails.length - 1];
  firstThumbnail.parentNode.insertBefore(lastThumbnail, firstThumbnail);
});

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function() {
    fullPhoto.src = thumbnails[i].src;
  });
}