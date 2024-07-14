import { MovieModel } from '@/services/Movie.type'
import { format } from 'date-fns'
import Image from 'next/image'
import React from 'react'

const MovieItem = ({data}: {data: MovieModel}) => {
  return (
    <div className='w-40 h-[22rem] overflow-hidden rounded-lg'>
      <Image
        width={160}
        height={360}
        src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
        alt={data.original_title}
        className='overflow-hidden rounded-lg'
      />
      <div className='relative h-[94px] mt-3'>
        <p className='line-clamp-2 font-bold'>{data.title}</p>
        <div className='absolute bottom-0 text-sm'>
          <p>
            <span>{data.popularity}</span>
            <span className='ml-1'>views</span>
          </p>
          <p>
            {format(data.release_date, 'PPP')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
