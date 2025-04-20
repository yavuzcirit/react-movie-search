import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MovieDetails from '../components/movies/MovieDetails';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Layout>
        <div className="error-message">Movie ID is required</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <MovieDetails imdbID={id} />
    </Layout>
  );
};

export default MovieDetailPage;