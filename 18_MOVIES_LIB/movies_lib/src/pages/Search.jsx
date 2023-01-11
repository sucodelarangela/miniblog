import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieGrid.css';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchedMovies = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchedMovies);
  }, [movies]);


  return (
    <section className='container'>
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {!movies && <p>Carregando...</p>}
        {movies && movies.length === 0 ? <p>Não há resultados para sua busca...</p> : ''}
        {movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};
