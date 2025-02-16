import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderImages(images);
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
});
