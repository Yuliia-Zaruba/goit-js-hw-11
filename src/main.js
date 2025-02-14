// Импортируем необходимые модули и библиотеки
import { fetchImages } from './js/pixabay-api.js'; // Функция для запроса к API
import { renderGallery } from './js/render-functions.js'; // Функция отрисовки галереи
import iziToast from 'izitoast'; // Библиотека для уведомлений
import 'izitoast/dist/css/iziToast.min.css'; // Стили для iziToast
import SimpleLightbox from 'simplelightbox'; // Библиотека для модального просмотра изображений
import 'simplelightbox/dist/simple-lightbox.min.css'; // Стили для SimpleLightbox

// Получаем элементы из DOM
const form = document.querySelector('#search-form'); // Форма поиска
const gallery = document.querySelector('#gallery'); // Галерея изображений
const loader = document.querySelector('#loader'); // Индикатор загрузки
let lightbox; // Переменная для SimpleLightbox

// Добавляем обработчик события на форму
form.addEventListener('submit', async event => {
  event.preventDefault(); // Отменяем стандартное поведение формы
  const query = event.target.elements.searchQuery.value.trim(); // Получаем введенный текст

  // Проверяем, введено ли значение
  if (!query) {
    iziToast.warning({ message: 'Please enter a search term' }); // Показываем предупреждение
    return;
  }

  gallery.innerHTML = ''; // Очищаем галерею перед новым запросом
  loader.style.display = 'block'; // Показываем индикатор загрузки

  try {
    const images = await fetchImages(query); // Выполняем запрос к API

    // Проверяем, есть ли изображения в ответе
    if (images.length === 0) {
      iziToast.error({ message: 'Sorry, no images found!' }); // Показываем ошибку
      return;
    } else {
      renderGallery(images, gallery); // Отрисовываем галерею
      lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh(); // Обновляем SimpleLightbox
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!' }); // Показываем сообщение об ошибке
  } finally {
    loader.style.display = 'none'; // Скрываем индикатор загрузки
  }
});
