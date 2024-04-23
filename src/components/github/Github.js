import React from 'react'
import './Github.css'

const Github = () => {
  function githubRedi() {
    window.open('https://github.com/Positiveoo1', '_blank');
  }
  return (
    <div>
      <div className='container1'>
        <h1>My Github</h1>
        <p>Follow my github and learn new things and review your learnings. I hope it will be beneficial for your future knowledge.</p>
        <button onClick={() => githubRedi()}> <span><i class="fa-brands fa-github"></i></span><a href='' target='_blank'>Join</a></button>
      </div>
    </div>
  )
}

export default Github