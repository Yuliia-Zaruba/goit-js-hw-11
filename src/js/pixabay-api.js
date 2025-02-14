import axios from 'axios';
// Ключ API и базовый URL
const API_KEY = '48848283-2fdf95bc8df92e3ac2f3192c4';
// const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';
// Функция для выполнения запроса к API
export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits; // Возвращаем массив изображений
  } catch (error) {
    console.error('Ошибка при запросе к Pixabay API:', error);
    throw new Error(); // ("Не удалось загрузить изображения"); // Бросаем ошибку
  }
}
