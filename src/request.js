import axios from 'axios';

export default function(query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4444/graphql', { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}
