import { RANDOM_IMAGE } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface HorizontalCardPropsModel {
  imageSrc: string;
  title: string;
  description: string;
  shortNote: string;
  href: string;
}

const HorizontalCard = ({ description, imageSrc, shortNote, title, href }: HorizontalCardPropsModel) => {
  return (
    <Link className='flex gap-4' href={href}>
      <div className='w-30 h-full flex-shrink-0'>
        <Image
          width={160}
          height={360}
          src={imageSrc ? 'https://image.tmdb.org/t/p/w500' + imageSrc : RANDOM_IMAGE}
          alt={title}
          className='overflow-hidden rounded-lg'
        />
      </div>
      <div>
        <p className='font-bold text-xl'>{title}</p>
        <p className='text-sm'>{shortNote}</p>
        <p className='italic mt-2'>{description}</p>
      </div>
    </Link>
  )
}

export default HorizontalCard
