import CardItem from '@/components/MovieItem'
import { getTrendingMovies } from '@/services/trendingServices'
import React from 'react'

const TrendingMovies = async () => {
const trendingMovies = await getTrendingMovies()
  return (
    <section className='container m-auto p-4'>
      <p>Phim hot</p>
      <ul className='flex gap-x-2 w-full overflow-x-auto'>
        {
          trendingMovies.results.map((movie) => (
            <li
              className='flex-shrink-0'
              key={movie.id}
            >
              <CardItem data={movie}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default TrendingMovies