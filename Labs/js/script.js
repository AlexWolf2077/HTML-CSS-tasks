/* Галерея */
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

/* Модальное окно */
document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.style.display = 'none';
});
const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
openModalBtn.addEventListener('click', function() {
  modalOverlay.style.display = 'flex';
});
closeModalBtn.addEventListener('click', function() {
  closeModal();
});
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    // Отправка формы
    closeModal();
  }
});
modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
function validateForm() {
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  if (nameValue === '' || phoneValue === '') {
    alert('Пожалуйста, заполните все поля формы.');
    return false;
  }
  if (!/^[a-zA-Zа-яА-Я\s]+$/.test(nameValue)) {
    alert('Поле "Имя" должно содержать только текстовые значения.');
    return false;
  }
  if (!/^\d+$/.test(phoneValue)) {
    alert('Поле "Номер телефона" должно содержать только числовые значения.');
    return false;
  }
  return true;
}
function closeModal() {
  modalOverlay.style.display = 'none';
  contactForm.reset();
}
