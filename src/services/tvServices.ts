import { BaseService } from "."
import { MovieVideosModel } from "./Movie.type"
import { TvDetailModel } from "./Tv.type"

interface TvVideosModel extends MovieVideosModel {}

export const getTvDetail = async (tvSeriesId: string | number) => {
  const { data } = await BaseService.get<TvDetailModel>('tv/' + tvSeriesId)
  return data
}

export const getTvVideos = async (tvSeriesId: string | number) => {
  const {data} = await BaseService.get<TvVideosModel>('tv/' + tvSeriesId + '/videos')
  return data
}
