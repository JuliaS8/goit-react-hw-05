import { useState, useEffect } from 'react'
import MovieList from '/src/components/MovieList/'

const HomePage = () => {
    const [movies, setMovies] = useState([]);



    
  return (
      <div>
          <h1>HomePage</h1>
          <MovieList/>
      </div>
  )
}

export default HomePage;