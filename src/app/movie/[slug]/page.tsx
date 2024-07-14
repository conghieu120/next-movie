import { getMovieByIdService, getMovieReviews } from '@/services/movieServices'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieDetail = async ({params}: {params: {slug: string}}) => {
  const [movieId] = params.slug.split('-')
  const movie = await getMovieByIdService(movieId)
  const reviews = await getMovieReviews(movieId)

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
      <div className='container m-auto my-12 grid grid-cols-3 gap-6'>
        <div>
          <Image
            src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
            width={500}
            height={1200}
            alt={movie.title}
            className='rounded-xl overflow-hidden'
          />
        </div>
        <div className='col-span-2'>
          <h1 className='font-bold text-3xl'>{movie.title}</h1>
          <p className='text-sm'>{format(movie.release_date, 'PPPP')}</p>
          <p className='text-sm'>
            <span>Genres:</span>
            <span className='ml-1'>{movie.genres.map((genre) => genre.name).join(', ')}</span>
          </p>
          <p className='text-sm'>
            <span>{movie.popularity}</span>
            <span className='ml-1'>views</span>
          </p>
          <div className='grid grid-rows-1 grid-flow-col gap-4 my-2'>
            <p className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'>{movie.runtime} minutes</p>
            <p className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'>{movie.vote_average}/10</p>
            <Link
              href={movie.homepage}
              target='_blank'
              className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'
            >Home page</Link>
          </div>
          <p className='text-pretty text-balance'>{movie.overview}</p>
        </div>
      </div>
      <section className='container m-auto my-6'>
        <h3 className='text-xl font-bold'>Reviews</h3>
        {
          reviews.results?.map(review => (
            <div className='my-2'>
              <p className='font-bold text-sm'>{review.author}</p>
              <p className='text-sm text-pretty text-balance'>{review.content}</p>
            </div>
          ))
        }
      </section>
    </section>
  )
}

export default MovieDetail