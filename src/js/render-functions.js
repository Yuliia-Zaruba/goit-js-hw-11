// render-functions.js
export function renderGallery(images, container) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <a href="${largeImageURL}" class="gallery-item">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
                <p><b>Likes:</b> ${likes}</p>
                <p><b>Views:</b> ${views}</p>
                <p><b>Comments:</b> ${comments}</p>
                <p><b>Downloads:</b> ${downloads}</p>
            </div>
        </a>
    `
    )
    .join(''); // Создаём HTML-строку из массива изображений

  container.innerHTML = markup; // Вставляем в контейнер галереи
}
