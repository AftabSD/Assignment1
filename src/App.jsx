import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import moviesData from './movies.json';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
    <>
      <NavBar />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
