import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(movie => (
          <MovieItem key={movie.id} movieDetails={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
