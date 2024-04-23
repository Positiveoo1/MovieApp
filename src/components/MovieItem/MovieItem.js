import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>{movie.Title}</Link>
    </li>
  );
};

export default MovieItem;
