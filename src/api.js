import axios from 'axios'

const shortenLink = async (url) => {
  try {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
    const { result } = response.data;
    return result.full_short_link || ''
  } catch (error) {
    console.log(error);
    throw new Error('Link shortening failed.');
  }
};

export default shortenLink;
