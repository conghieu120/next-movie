import { BaseService } from "."
import { MovieModel } from "./Movie.type"
import { TvItemModel } from "./Tv.type"

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
