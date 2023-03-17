import axios from 'axios';

export const searchMovie = async (search: { query: string; pageNumberMemo: number }) => {
  try {
    console.log('searching');
    const response = await axios.post('http://localhost:5050/search', {
      headers: {
        'Access-Control-Allow-Origin': 'http://192.168.1.9:5173',
      },
      data: {
        query: search.query,
        page: search.pageNumberMemo,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
