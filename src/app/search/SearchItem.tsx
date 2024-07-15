import { SearchItemModel } from '@/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const SearchItem = ({data}: {data: SearchItemModel}) => {
  return (
    <Link
      className='w-40 h-[22rem] overflow-hidden rounded-lg block'
      href={data.media_type === 'tv' ?
        '/tv/'+ data.id + '-' + slugify(data.name || '') :
        '/movie/'+ data.id + '-' + slugify(data.title || '')
      }
    >
      <Image
        width={160}
        height={360}
        src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
        alt={data.poster_path}
        className='overflow-hidden rounded-lg'
      />
      <div className='relative h-[94px] mt-3'>
        <p className='line-clamp-2 font-bold'>{data.name || data.title}</p>
        <div className='absolute bottom-0 text-sm'>
          <p>
            <span>{data.popularity}</span>
            <span className='ml-1'>views</span>
          </p>
          <p>Type: {data.media_type}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchItem