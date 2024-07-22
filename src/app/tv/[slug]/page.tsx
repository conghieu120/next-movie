import Videos from '@/components/Videos';
import { getTvDetail } from '@/services/tvServices';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Seasons from './Seasons';
import SimilarTv from './SimilarTv';
import { RANDOM_IMAGE } from '@/utils/constant';

export const metadata: Metadata = {
  title: "View TV Serials",
  description: "View TV Serials",
};

const TvDetail = async ({params}: {params: {slug: string}}) => {
  const [tvId] = params.slug.split('-')
  const tv = await getTvDetail(tvId)
  metadata.title = 'Watch ' + tv.name
  return (
    <section>
      <div
        className='h-96 w-full'
        style={{
          backgroundImage: 'url(https://image.tmdb.org/t/p/original' + tv.backdrop_path + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='px-4 container m-auto my-12 md:grid md:grid-cols-3 gap-6 max-w-5xl'>
        <div className='mb-3'>
          <Image
            src={tv.poster_path ? 'https://image.tmdb.org/t/p/original' + tv.poster_path : RANDOM_IMAGE}
            width={500}
            height={1200}
            alt={tv.name}
            className='rounded-xl overflow-hidden m-auto'
          />
        </div>
        <div className='col-span-2'>
          <h1 className='font-bold text-3xl'>{tv.name}</h1>
          <p className='text-sm'>Country: {tv.production_countries.map(c => c.name).join(', ')}</p>
          <p className='text-sm'>
            <span>Genres:</span>
            <span className='ml-1'>{tv.genres.map((genre) => genre.name).join(', ')}</span>
          </p>
          <p className='text-sm'>
            <span>{tv.popularity}</span>
            <span className='ml-1'>views</span>
          </p>
          <div className='grid grid-rows-1 grid-flow-col gap-4 my-2'>
            <p className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'>{tv.episode_run_time} minutes</p>
            <p className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'>{tv.vote_average}/10</p>
            <Link
              href={tv.homepage}
              target='_blank'
              className='bg-green-600 rounded-3xl overflow-hidden text-center text-white p-2'
            >Home page</Link>
          </div>
          <p className='text-pretty text-balance'>{tv.overview}</p>
        </div>
      </div>
      <Videos
        type='tv'
        id={tv.id}
      />
      <Seasons data={tv}/>
      <SimilarTv id={tv.id}/>
    </section>
  )
}

export default TvDetail