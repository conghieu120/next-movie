import CardItem from '@/components/MovieItem'
import { getTrendingMovies } from '@/services/trendingServices'
import React from 'react'

const TrendingMovies = async () => {
const trendingMovies = await getTrendingMovies()
  return (
    <section className='container m-auto p-4'>
      <h2 className='text-2xl font-bold mb-2'>Trending movies</h2>
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