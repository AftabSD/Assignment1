function Movie({ name, year, rating }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '0.5rem', padding: '0.5rem' }}>
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Movie;
