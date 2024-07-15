import { BaseService } from "."
import { MovieDetailModel, MovieReviewsModel, MovieVideosModel, SimilarMoviesModel } from "./Movie.type"

export const getMovieByIdService = async (id: string | number) => {
  const {data} = await BaseService.get<MovieDetailModel>('movie/' + id)
  return data
}

export const getMoviesSimilar = async (id: string | number) => {
  const {data} = await BaseService.get<SimilarMoviesModel>('movie/' + id + '/similar')
  return data
}

export const getMovieReviews = async (id: string | number) => {
  const {data} = await BaseService.get<MovieReviewsModel>('movie/' + id + '/reviews')
  return data
}

export const getMovieVideos = async (id: string | number) => {
  const {data} = await BaseService.get<MovieVideosModel>('movie/' + id + '/videos')
  return data
}
