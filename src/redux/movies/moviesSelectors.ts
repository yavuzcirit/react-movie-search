import { RootState } from "../rootReducer";


export const selectMovies = (state: RootState) => state.movies.movies;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectError = (state: RootState) => state.movies.error;
export const selectSearchQuery = (state: RootState) => state.movies.searchQuery;
export const selectYear = (state: RootState) => state.movies.year;
export const selectType = (state: RootState) => state.movies.type;
export const selectCurrentPage = (state: RootState) => state.movies.currentPage;
export const selectTotalResults = (state: RootState) => state.movies.totalResults;
export const selectSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const selectSelectedMovieLoading = (state: RootState) => state.movies.selectedMovieLoading;
export const selectSelectedMovieError = (state: RootState) => state.movies.selectedMovieError;
export const selectTotalPages = (state: RootState) => Math.ceil(state.movies.totalResults / 10);