import { Dispatch } from 'redux';

import * as types from './moviesTypes';
import { getMovieDetails, MovieDetailsParams, searchMovies, SearchParams } from '../../api/omdApi';

export const setSearchQuery = (query: string) => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});

export const setYearFilter = (year: string) => ({
  type: types.SET_YEAR_FILTER,
  payload: year,
});

export const setTypeFilter = (mediaType: 'movie' | 'series' | 'episode' | '') => ({
  type: types.SET_TYPE_FILTER,
  payload: mediaType,
});

export const setCurrentPage = (page: number) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

export const searchMoviesRequest = () => ({
  type: types.SEARCH_MOVIES_REQUEST,
});

export const searchMoviesSuccess = (data: any) => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  payload: data,
});

export const searchMoviesFailure = (error: string) => ({
  type: types.SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const getMovieDetailsRequest = () => ({
  type: types.GET_MOVIE_DETAILS_REQUEST,
});

export const getMovieDetailsSuccess = (data: any) => ({
  type: types.GET_MOVIE_DETAILS_SUCCESS,
  payload: data,
});

export const getMovieDetailsFailure = (error: string) => ({
  type: types.GET_MOVIE_DETAILS_FAILURE,
  payload: error,
});

export const fetchMovies = (params?: SearchParams) => {
  return async (dispatch: Dispatch, getState: any) => {
    const state = getState().movies;
    
    const searchParams: SearchParams = {
      s: params?.s || state.searchQuery || 'Pokemon',
      type: params?.type !== undefined ? params.type : state.type,
      y: params?.y || state.year,
      page: params?.page || state.currentPage,
    };

    dispatch(searchMoviesRequest());

    try {
      const data = await searchMovies(searchParams);

      if (data.Response === 'True') {
        dispatch(searchMoviesSuccess({
          movies: data.Search,
          totalResults: parseInt(data.totalResults),
        }));
      } else {
        dispatch(searchMoviesFailure(data.Error || 'No results found'));
      }
    } catch (error) {
      dispatch(searchMoviesFailure(error instanceof Error ? error.message : 'An error occurred'));
    }
  };
};

export const fetchMovieDetails = (imdbID: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(getMovieDetailsRequest());

    try {
      const params: MovieDetailsParams = {
        i: imdbID,
        plot: 'full',
      };

      const data = await getMovieDetails(params);

      if (data.Response === 'True') {
        dispatch(getMovieDetailsSuccess(data));
      } else {
        dispatch(getMovieDetailsFailure(data.Error || 'Movie details not found'));
      }
    } catch (error) {
      dispatch(getMovieDetailsFailure(error instanceof Error ? error.message : 'An error occurred'));
    }
  };
};