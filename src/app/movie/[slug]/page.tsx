import { getMovieByIdService } from '@/services/movieServices'
import Image from 'next/image'
import React from 'react'

const MovieDetail = async ({params}: {params: {slug: string}}) => {
  const [movieId] = params.slug.split('-')
  const movie = await getMovieByIdService(movieId)
  console.log(movie)

  return (
    <section>
      <div
        className='h-96 w-full'
        style={{
          backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='container my-6 mx-4'>
        <h1 className='font-bold text-2xl'>{movie.title}</h1>
      </div>
    </section>
  )
}

export default MovieDetail