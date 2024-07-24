import { getMovieReviews } from '@/services/movieServices'
import React from 'react'

const Reviews = async ({movieId}: {movieId: string | number}) => {
  const reviews = await getMovieReviews(movieId)

  return (
    <section className='container m-auto py-6 px-4 max-w-5xl'>
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
  )
}

export default Reviews