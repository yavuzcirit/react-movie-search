import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { setSearchQuery, setYearFilter, setTypeFilter, fetchMovies } from '../../redux/movies/moviesActions';
import { selectSearchQuery, selectYear, selectType } from '../../redux/movies/moviesSelectors';

const MovieFilters: React.FC = () => {
  const dispatch: any = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const year = useSelector(selectYear);
  const type = useSelector(selectType);
  
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'movie', label: 'Movies' },
    { value: 'series', label: 'TV Series' },
    { value: 'episode', label: 'Episodes' },
  ];

  const yearOptions = () => {
    const options = [{ value: '', label: 'All Years' }];
    const currentYear = new Date().getFullYear();
    
    for (let year = currentYear; year >= 1900; year--) {
      options.push({ value: year.toString(), label: year.toString() });
    }
    
    return options;
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(localSearch));
    dispatch(fetchMovies({ s: localSearch, type, y: year, page: 1 }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as 'movie' | 'series' | 'episode' | '';
    dispatch(setTypeFilter(newType));
    dispatch(fetchMovies({ s: searchQuery, type: newType, y: year, page: 1 }));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    dispatch(setYearFilter(newYear));
    dispatch(fetchMovies({ s: searchQuery, type, y: newYear, page: 1 }));
  };

  return (
    <div className="movie-filters">
      <div className="search-bar">
        <Input
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search for movies..."
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      
      <div className="filter-options">
        <div className="filter-item">
          <label>Type:</label>
          <Select
            value={type}
            onChange={handleTypeChange}
            options={typeOptions}
          />
        </div>
        
        <div className="filter-item">
          <label>Year:</label>
          <Select
            value={year}
            onChange={handleYearChange}
            options={yearOptions()}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieFilters;