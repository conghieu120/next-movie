import { RANDOM_IMAGE } from '@/utils/constant'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

interface CardItemPropsModel {
  id: string | number
  imageSrc: string
  title: string
  date?: string
  views: number | string
  type?: 'tv' | 'movie'
}

const CardItem = async ({data}: {data: CardItemPropsModel}) => {
  return (
    <Link
      className='w-40 h-[22rem] overflow-hidden rounded-lg block'
      href={(data.type === 'tv' ? '/tv/' : '/movie/') + data.id + '-' + slugify(data.title)}
    >
      <Image
        width={160}
        height={360}
        src={data.imageSrc ? 'https://image.tmdb.org/t/p/w500' + data.imageSrc : RANDOM_IMAGE}
        alt={data.title}
        className='overflow-hidden rounded-lg'
        blurDataURL={RANDOM_IMAGE}
      />
      <div className='relative h-[94px] mt-3'>
        <p className='line-clamp-2 font-bold'>{data.title}</p>
        <div className='absolute bottom-0 text-sm'>
          <p>
            <span>{data.views}</span>
            <span className='ml-1'>views</span>
          </p>
          <p>
            {!!data.date && format(data.date, 'PPP')}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CardItem
