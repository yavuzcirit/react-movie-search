import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { fetchMovieDetails } from '../../redux/movies/moviesActions';
import {
  selectSelectedMovie,
  selectSelectedMovieLoading,
  selectSelectedMovieError,
} from '../../redux/movies/moviesSelectors';

interface MovieDetailsProps {
  imdbID: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ imdbID }) => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector(selectSelectedMovie);
  const loading = useSelector(selectSelectedMovieLoading);
  const error = useSelector(selectSelectedMovieError);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="loading-spinner">Loading movie details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <Button onClick={handleGoBack}>Go Back</Button>
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/movie-placeholder.jpg';

  return (
    <div className="movie-details">
      <div className="movie-details-header">
        <Button onClick={handleGoBack} variant="outline" className="back-button">
          Back to List
        </Button>
        <h1 className="movie-title">{movie.Title}</h1>
      </div>
      
      <div className="movie-details-content">
        <div className="movie-poster">
          <img src={posterUrl} alt={movie.Title} />
        </div>
        
        <div className="movie-info">
          <div className="info-row">
            <span className="label">Year:</span>
            <span className="value">{movie.Year}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Released:</span>
            <span className="value">{movie.Released}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Runtime:</span>
            <span className="value">{movie.Runtime}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Genre:</span>
            <span className="value">{movie.Genre}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Director:</span>
            <span className="value">{movie.Director}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Actors:</span>
            <span className="value">{movie.Actors}</span>
          </div>
          
          <div className="info-row">
            <span className="label">IMDB Rating:</span>
            <span className="value">{movie.imdbRating}/10</span>
          </div>
          
          <div className="info-row">
            <span className="label">IMDB Votes:</span>
            <span className="value">{movie.imdbVotes}</span>
          </div>
          
          {movie.Type === 'movie' && movie.BoxOffice && (
            <div className="info-row">
              <span className="label">Box Office:</span>
              <span className="value">{movie.BoxOffice}</span>
            </div>
          )}
          
          {movie.Awards !== 'N/A' && (
            <div className="info-row">
              <span className="label">Awards:</span>
              <span className="value">{movie.Awards}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="plot-section">
        <h3>Plot</h3>
        <p>{movie.Plot}</p>
      </div>
      
      {movie.Ratings && movie.Ratings.length > 0 && (
        <div className="ratings-section">
          <h3>Ratings</h3>
          <div className="ratings-container">
            {movie.Ratings.map((rating, index) => (
              <div key={index} className="rating-item">
                <span className="rating-source">{rating.Source}:</span>
                <span className="rating-value">{rating.Value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;