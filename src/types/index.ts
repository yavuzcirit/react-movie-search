export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  export interface MovieDetails extends Movie {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }
  
  export interface SearchResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string;
  }
  
  export interface MovieState {
    movies: Movie[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    year: string;
    type: 'movie' | 'series' | 'episode' | '';
    currentPage: number;
    totalResults: number;
    selectedMovie: MovieDetails | null;
    selectedMovieLoading: boolean;
    selectedMovieError: string | null;
  }