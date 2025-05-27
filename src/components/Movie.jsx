function Movie({name, year, rating}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{name}</h2>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Movie;
