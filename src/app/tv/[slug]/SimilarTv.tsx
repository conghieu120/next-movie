import CardItem from '@/components/CardItem'
import { getSimilarTvSeries } from '@/services/tvServices'
import React from 'react'

const SimilarTv = async ({id}: {id: string | number}) => {
  const similarTvSeries = await getSimilarTvSeries(id)
  return (
    <section className='container p-4 m-auto'>
      <h2>Similar TV</h2>
      <ul className='flex gap-4 overflow-auto'>
        {
          similarTvSeries.results.map((tv) => (
            <li key={tv.id} className='flex-shrink-0'>
              <CardItem
                data={{
                  id: tv.id,
                  imageSrc: tv.poster_path,
                  title: tv.name,
                  views: tv.popularity,
                  date: tv.release_date,
                  type: 'tv',
                }}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SimilarTv
