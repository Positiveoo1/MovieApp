import React from 'react'
import './Home.css'

const Home = () => {
  function navigated() {
    window.location.href = '/contact'
  }
  return (
    <div>

      <div className='container'>
        <div className='textPart'>
          <h1>Go ahead, stream free</h1>
          <p>With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?</p>
          <button onClick={() => navigated()}>Contact</button>
        </div>

      </div>

    </div>
  )
}

export default Home