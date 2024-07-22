import Videos from '@/components/Videos'
import { getDetailSeason } from '@/services/seasonServices'
import React from 'react'

const SeasonDetail = async ({params}: {params: {slug: string}}) => {
  const [tvId, seasonNumber] = params.slug.split('-')
  const season = await getDetailSeason({ tvId, seasonNumber })
  return (
    <>
      <Videos type='season' id={tvId} seasonNumber={seasonNumber}/>
      <section className='container p-4 m-auto'>
        <h1 className='text-2xl font-bold'>{season.name}</h1>
        <p className='italic'>{season.overview}</p>
        <ul className='h-80 overflow-auto mt-6'>
          {
            season.episodes.map(ep => (
              <li key={ep.id} className='text-sm mb-4'>
                <h2 className='font-bold truncate text-green-600 ...'>Episode {ep.episode_number}: {ep.name}</h2>
                <p className='italic'>{ep.overview}</p>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

export default SeasonDetail
