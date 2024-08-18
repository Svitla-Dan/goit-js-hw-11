const URL = 'https://pixabay.com/api/';
const API_KEY = '45493659-807fc3e2fcb62ed82bdbe6cc7';

function searchImages(str) {
  return fetch(
    `${URL}?key=${API_KEY}&q=${encodeURIComponent(
      str
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { searchImages };
