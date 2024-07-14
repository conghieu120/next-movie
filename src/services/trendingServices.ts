import { BaseService } from "."
import { MovieModel } from "./Movie.type"
import { TvItemModel } from "./Tv.type"

export const getTrendingAll = async (time: 'day' | 'week' = 'day') => {
  const { data } = await BaseService.get<{ results: {
    backdrop_path: string
    id: number
    title: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    adult: false,
    original_language: string
    genre_ids: number[],
    popularity: number
    release_date: string
    video: false,
    vote_average: number
    vote_count: number
  }[] }>('trending/all/' + time)
  return data
}

export const getTrendingMovies = async (time: 'day' | 'week' = 'day') => {
  const { data } = await BaseService.get<{ results: MovieModel[] }>('trending/movie/' + time)
  return data
}

export const getTrendingTv = async (time: 'day' | 'week' = 'day') => {
  const { data } = await BaseService.get<{ results: TvItemModel[] }>('trending/tv/' + time)
  return data
}

export const getTrendingPerson = async (time: 'day' | 'week' = 'day') => {
  const { data } = await BaseService.get('trending/person/' + time)
  return data
}
