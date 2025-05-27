import Movie from '../components/Movie';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie 
        key={index} 
        name={movie.name} 
        year={movie.year} 
        rating={movie.rating} 
        />
      ))}
    </div>
  );
}

export default MovieList;
