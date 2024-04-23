// MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id} = useParams(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=49045aed`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();

    return () => {
      setMovieDetails(null);
    };
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.Title}</h2>
      <p>{movieDetails.Plot}</p>

    </div>
  );
};

export default MovieDetails;
