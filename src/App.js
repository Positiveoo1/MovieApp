import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AllMovies from './components/movies/AllMovies';
import Github from './components/github/Github';
import Contact from './components/Contact/Contact';
import MovieDetails from './components/movieDetails/MovieDetails';
import MobileUnsupportedMessage from './components/MobileUnsupportedMessage/MobileUnsupportedMessage';
function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/allMovies" element={<AllMovies />} />
            <Route path="/github" element={<Github />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movie/:imdbID" component={MovieDetails} />
            {isMobile ? <MobileUnsupportedMessage /> : null}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
