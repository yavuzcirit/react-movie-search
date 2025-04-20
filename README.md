# Movie Explorer

A React TypeScript application that allows users to search and view movie information using the OMDb API.

## Features

- Search for movies, TV series, or episodes
- Filter search results by year and type
- Pagination with 10 items per page
- View detailed information about each movie/show
- Responsive design

## Tech Stack

- React 18
- TypeScript
- Redux with Redux Thunk for state management
- React Router for navigation
- SCSS for styling
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yavuzcirit/react-movie-search.git
cd invent-movie-explorer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
  ├── api/                # API integration
  ├── components/         # Reusable components
  │   ├── common/         # Generic UI components
  │   ├── layout/         # Layout components
  │   └── movies/         # Movie-related components
  ├── pages/              # Page components
  ├── redux/              # Redux state management
  │   └── movies/         # Movies domain
  ├── styles/             # SCSS styles
  │   ├── components/     # Component styles
  │   └── pages/          # Page-specific styles
  ├── types/              # TypeScript type definitions
  └── utils/              # Helper functions
```

## API Usage

This application uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data. The API key is included in the repository for demonstration purposes.
