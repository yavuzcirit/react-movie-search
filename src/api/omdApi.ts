import axios from 'axios';

const API_KEY = 'b2620fd0';
const BASE_URL = 'https://www.omdbapi.com/';

export const omdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export interface SearchParams {
  s?: string;
  type?: 'movie' | 'series' | 'episode' | '';
  y?: string;
  page?: number;
}

export interface MovieDetailsParams {
  i: string;
  plot?: 'short' | 'full';
}

export const searchMovies = async (params: SearchParams) => {
  try {
    const response = await omdbApi.get('', { params });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (params: MovieDetailsParams) => {
  try {
    const response = await omdbApi.get('', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};