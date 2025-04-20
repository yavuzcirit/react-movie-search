import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/movie-placeholder.jpg';

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.Year}</span>
          <span className="movie-type">{movie.Type}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;