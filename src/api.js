import axios from 'axios';

const shortenLink = async (url) => {
  try {
    
    const API_URL = 'https://shorturl-api-w0c5.onrender.com/api/shorten'; 
    
    const response = await axios.post(API_URL, { url });
    return {
      shortUrl: response.data.shortUrl,
      shortCode: response.data.shortCode,
      originalUrl: response.data.originalUrl
    };
  } catch (error) {
    console.log(error);
    throw new Error('Link shortening failed.');
  }
};

export default shortenLink;