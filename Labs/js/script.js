/* Галерея */
const fullPhoto = document.querySelector('.full-photo');
const thumbnails = document.querySelectorAll('.gallery__photo-preview');
const arrow1 = document.querySelector('.gallery__photo-previews a:first-child');
const arrow2 = document.querySelector('.gallery__photo-previews a:last-child');
arrow1.addEventListener('click', function(event) { // Добавляем обработчик события для кнопки "Стрелка влево"
  event.preventDefault();
  const firstThumbnail = thumbnails[0];

  // Смещаем все миниатюры влево
  for (let i = 0; i < thumbnails.length - 1; i++) {
    thumbnails[i].parentNode.insertBefore(thumbnails[i + 1], thumbnails[i]);
  }
  // Перемещаем первый элемент в конец
  thumbnails[thumbnails.length - 1].parentNode.insertBefore(firstThumbnail, thumbnails[thumbnails.length - 1].nextSibling);


});
arrow2.addEventListener('click', function(event) { // Добавляем обработчик события для кнопки "Стрелка вправо"
  event.preventDefault();
  const firstThumbnail = thumbnails[0];
  const lastThumbnail = thumbnails[thumbnails.length - 1];
  // Смещаем все миниатюры вправо 
  for (let i = thumbnails.length - 1; i > 0; i--) { thumbnails[i].parentNode.insertBefore(thumbnails[i], thumbnails[i - 1]); }
  // Смещаем теги элементов 
  lastThumbnail.parentNode.insertBefore(firstThumbnail, lastThumbnail.nextSibling);
});
arrow1.addEventListener('click', function(event) { // Добавляем обработчик события для кнопки "Стрелка влево"
  event.preventDefault();
  const firstThumbnail = thumbnails[0];
  // Смещаем все миниатюры влево
  for (let i = 0; i < thumbnails.length - 1; i++) {
    thumbnails[i].parentNode.insertBefore(thumbnails[i + 1], thumbnails[i]);
  }
  // Перемещаем первый элемент в конец
  thumbnails[thumbnails.length - 1].parentNode.insertBefore(firstThumbnail, thumbnails[thumbnails.length - 1].nextSibling);
});
for (let i = 0; i < thumbnails.length; i++) { // Добавление обработчиков события клика на все элементы миниатюр
  thumbnails[i].addEventListener('click', function() {
    fullPhoto.src = thumbnails[i].src; // Установка источника полного фото на источник кликнутой миниатюры
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
