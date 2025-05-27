import { useState} from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import moviesData from './movies.json';
import './App.css';

function App() {
  
  return (
    <>
      <NavBar />
      <MovieList movies={moviesData} />
    </>
  );
}

export default App;
