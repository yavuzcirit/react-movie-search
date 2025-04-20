import { MovieState } from '../../types';
import * as types from './moviesTypes';

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  searchQuery: 'Pokemon', 
  year: '',
  type: '',
  currentPage: 1,
  totalResults: 0,
  selectedMovie: null,
  selectedMovieLoading: false,
  selectedMovieError: null,
};

export const moviesReducer = (state = initialState, action: any): MovieState => {
  switch (action.type) {
    case types.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        totalResults: action.payload.totalResults,
      };
    case types.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
      };
    case types.GET_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        selectedMovieLoading: true,
        selectedMovieError: null,
      };
    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        selectedMovieLoading: false,
        selectedMovie: action.payload,
      };
    case types.GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        selectedMovieLoading: false,
        selectedMovieError: action.payload,
        selectedMovie: null,
      };
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        currentPage: 1, 
      };
    case types.SET_YEAR_FILTER:
      return {
        ...state,
        year: action.payload,
        currentPage: 1, 
      };
    case types.SET_TYPE_FILTER:
      return {
        ...state,
        type: action.payload,
        currentPage: 1, 
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};