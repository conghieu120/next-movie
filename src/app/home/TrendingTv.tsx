import CardItem from '@/components/MovieItem'
import TvItem from '@/components/TvItem'
import { getTrendingTv } from '@/services/trendingServices'
import React from 'react'

const TrendingTv = async () => {
  const trendingTv = await getTrendingTv()
  return (
    <section className='container m-auto p-4'>
      <h2 className='text-2xl font-bold mb-2'>Trending TV</h2>
      <ul className='flex gap-x-2 w-full overflow-x-auto'>
        {
          trendingTv.results.map((tv) => (
            <li
              className='flex-shrink-0'
              key={tv.id}
            >
              <TvItem data={tv}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default TrendingTv