import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-container">
        <div className="container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div className="container">
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
