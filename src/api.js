import axios from 'axios'

const shortenLink = async (url) => {
  try {
    const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
      url: encodeURIComponent(url),
    });
    const shortLink = response.data.result_url;
    return shortLink || '';
  } catch (error) {
    console.log(error);
    throw new Error('Link shortening failed.');
  }
};

export default shortenLink;

/*
import axios from 'axios'

const shortenLink = async (url) => {
  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    const shortLink = response.data;
    return shortLink || '';
  } catch (error) {
    console.log(error);
    throw new Error('Link shortening failed.');
  }
};

export default shortenLink;
*/
