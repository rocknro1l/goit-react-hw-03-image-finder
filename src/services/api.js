import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImages(q, page) {
  const { data } = await axios.get('', {
    params: {
      key: '39808919-1d9799ea84529475b5b50a509',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q,
      page,
    },
  });

  return data;
}
