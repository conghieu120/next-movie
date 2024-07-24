import Videos from '@/components/Videos'
import { getMovieByIdService } from '@/services/movieServices'
import { RANDOM_IMAGE } from '@/utils/constant'
import { format } from 'date-fns'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Reviews from './Reviews'
import SimilarMovies from './SimilarMovies'
import { Metadata } from 'next'

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const [movieId] = params.slug.split('-')
  const movie = await getMovieByIdService(movieId)
  return {
    title: 'Watch ' + movie.title + ' online free',
    description: movie.overview,
    openGraph: {
      images: ['https://image.tmdb.org/t/p/original' + movie.poster_path],
      title: movie.title,
      description: movie.overview,
    }
  }
}

const MovieDetail = async ({params}: {params: {slug: string}}) => {
  const [movieId] = params.slug.split('-')
  const movie = await getMovieByIdService(movieId)

  return (
    <>
      <section>
        <div
          className='h-96 w-full'
          style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='px-4 container m-auto my-12 md:grid md:grid-cols-3 gap-6 max-w-5xl'>
          <div className='mb-3'>
            <Image
              src={movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : RANDOM_IMAGE}
              width={500}
              height={1200}
              alt={movie.title}
              className='rounded-xl overflow-hidden m-auto'
            />
          </div>
          <div className='col-span-2'>
            <h1 className='font-bold text-3xl'>{movie.title}</h1>
            {
              !!movie.release_date && (
                <p className='text-sm'>{format(movie.release_date, 'PPPP')}</p>
              )
            }
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
        <Videos type='movie' id={movieId}/>
        <SimilarMovies movieId={movieId}/>
        <Reviews movieId={movieId}/>
      </section>
    </>
  )
}

export default MovieDetail
