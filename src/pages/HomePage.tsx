import React from 'react';
import Layout from '../components/layout/Layout';
import MovieFilters from '../components/movies/MovieFilters';
import MovieGrid from '../components/movies/MovieGrid';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="home-page">
        <h2 className="page-title">Movie Explorer</h2>
        <MovieFilters />
        <MovieGrid />
      </div>
    </Layout>
  );
};

export default HomePage;