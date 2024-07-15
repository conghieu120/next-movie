import MovieItem from '@/components/MovieItem'
import { getMoviesSimilar } from '@/services/movieServices'
import React from 'react'

const SimilarMovies = async ({movieId}: {movieId: string | number}) => {
  const similarMovies = await getMoviesSimilar(movieId)
  return (
    <section className='container m-auto my-6 px-4'>
      <h3 className='text-xl font-bold mb-2'>Similar movies</h3>
      <ul className='overflow-x-auto w-full flex gap-2'>
        {
          similarMovies.results.map(movie => (
            <li key={movie.id} className='flex-shrink-0'>
              <MovieItem data={movie}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SimilarMovies