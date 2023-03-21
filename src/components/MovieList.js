import React from 'react';
import './componentStyle.css';
import Movie from './Movie';
import initialMovies from './consts/initialMovies';

const MovieList = () => {
  return (
    <div class="container">
      <div class="row">
        {initialMovies.map((movie) => (
          <div class="columns" key={movie}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
