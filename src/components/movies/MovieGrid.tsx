import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import Pagination from '../common/Pagination';
import { fetchMovies, setCurrentPage } from '../../redux/movies/moviesActions';
import {
  selectMovies,
  selectLoading,
  selectError,
  selectCurrentPage,
  selectTotalPages,

} from '../../redux/movies/moviesSelectors';

const MovieGrid: React.FC = () => {
  const dispatch: any = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);


  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchMovies({ page }));
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="movie-grid-container">
      {movies.length === 0 ? (
        <div className="no-results">No movies found. Try a different search.</div>
      ) : (
        <>
          <table className="movie-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>IMDB ID</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie} />
              ))}
            </tbody>
          </table>
          
          <div className="pagination-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieGrid;