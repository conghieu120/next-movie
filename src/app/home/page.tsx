import Search from './Search'
import TrendingMovies from './TrendingMovies'
import TrendingTv from './TrendingTv'

const Home = async () => {
  return (
    <div>
      <p>Banner</p>
      <Search/>
      <TrendingMovies/>
      <TrendingTv/>
    </div>
  )
}

export default Home
