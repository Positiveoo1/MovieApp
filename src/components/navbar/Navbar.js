import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MovieItem from '../MovieItem/MovieItem';



const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = '49045aed';

  const searchFilm = async (event) => {
    event.preventDefault();
    if (!searchTerm) return;

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
        alert("No results found");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function refreshed() {
    window.location.reload(true);
    window.location.href = '/';
  }

  return (
    <div>
      <header>
        <nav>
          <h1 className='logo' onClick={() => { refreshed() }}>Ple<span>x</span></h1>
          <form onSubmit={searchFilm}>
            <div className='input'>
              <input
                type='text'
                placeholder='Find Movies & TV'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button type="submit" className='search'>Search</button>
              <div className="search-results">
                {searchResults.length > 0 && (
                  <ul>
                    {}
                    {searchResults.map((result) => (
                      <MovieItem key={result.id} movie={result} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
          <div id='module'>
            <ul className='cont'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/allMovies">All Movies</Link></li>
              <li><Link to="/github">Github</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
