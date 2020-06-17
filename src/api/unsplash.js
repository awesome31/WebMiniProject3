import axios from 'axios';

/**
 * @param {string} term
 */
const getPhotos = (term) => {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: term,
    },
    headers: {
      Authorization: 'Client-ID',
    },
  });
};

export { getPhotos };
