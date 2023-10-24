import axios from 'axios'

const shortenLink = async (url) => {
  try {
    const response = await axios.get(`http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    const shortLink = response.data;
    return shortLink || '';
  } catch (error) {
    console.log(error);
    throw new Error('Link shortening failed.');
  }
};

export default shortenLink;
