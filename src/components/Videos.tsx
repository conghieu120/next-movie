"use client"
import { MovieVideosModel, VideoItemModel } from '@/services/Movie.type'
import { getMovieVideos } from '@/services/movieServices'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Videos = ({id, type, seasonNumber}: {id: string | number, type: 'movie' | 'tv' | 'season', seasonNumber?: string | number}) => {
  const [videos, setVideos] = useState<VideoItemModel[]>([])
  const [watching, setWatching] = useState<null | VideoItemModel>(null)

  const getVideos = async () => {
    const params = {
      movie: type === 'movie' ? id : undefined,
      tv: (type === 'tv' || type === 'season') ? id : undefined,
      season: seasonNumber,
    }
    const { data: videoResults } = await axios.get<MovieVideosModel>('/api/videos', { params }).catch(() => {
      return { data: null }
    })
    const videos = videoResults?.results || []
    setVideos(videos || [])
    setWatching(videos[0] || null)
  }
  useEffect(() => {
    getVideos()
  }, [])

  return (
    <section className='container m-auto my-6 px-4'>
      {
        watching && (
          <div key={watching.id} className='mb-4 m-auto w-full'>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${watching.key}`}
              title={watching.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )
      }
      <ul className='flex gap-4 w-full overflow-auto'>
        {
          videos.map((v, idx) => (
            <li
              onClick={() => setWatching(v)}
              key={v.id}
              className={
                'p-2 w-12 text-center rounded text-white cursor-pointer ' +
                (v.id === watching?.id ? 'bg-green-600' : 'bg-green-400')
              }
            >#{idx}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Videos