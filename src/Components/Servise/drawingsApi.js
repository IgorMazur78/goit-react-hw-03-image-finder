import axios from 'axios';

const fetchArticlesWithQuery =(searchQuery, page)  => {
       
  return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17529185-ee1c09177ccec717363f5cb46&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
