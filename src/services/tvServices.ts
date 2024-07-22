import { BaseService } from "."
import { MovieModel, MovieVideosModel, SimilarMoviesModel } from "./Movie.type"
import { TvDetailModel } from "./Tv.type"

interface TvVideosModel extends MovieVideosModel {}

interface SimilarTvItemResultModel extends MovieModel {
  name: string
}
interface SimilarTvModel extends SimilarMoviesModel {
  page: number
  results: SimilarTvItemResultModel[]
}

export const getTvDetail = async (tvSeriesId: string | number) => {
  const { data } = await BaseService.get<TvDetailModel>('tv/' + tvSeriesId)
  return data
}

export const getTvVideos = async (tvSeriesId: string | number) => {
  const {data} = await BaseService.get<TvVideosModel>('tv/' + tvSeriesId + '/videos')
  return data
}

export const getSimilarTvSeries = async (tvSeriesId: string | number) => {
  const {data} = await BaseService.get<SimilarTvModel>('tv/' + tvSeriesId + '/similar')
  return data
}
