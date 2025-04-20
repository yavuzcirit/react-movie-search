import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <tr className="movie-item">
      <td>
        <Link to={`/movie/${movie.imdbID}`} className="movie-title">
          {movie.Title}
        </Link>
      </td>
      <td>{movie.Year}</td>
      <td>{movie.imdbID}</td>
      <td>{movie.Type}</td>
      <td>
        <Link to={`/movie/${movie.imdbID}`} className="view-details-btn">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default MovieItem;