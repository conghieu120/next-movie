import { BaseService } from "."
import { MovieDetailModel, MovieReviewsModel } from "./Movie.type"

export const getMovieByIdService = async (id: string | number) => {
  const {data} = await BaseService.get<MovieDetailModel>('movie/' + id)
  return data
}

export const getMovieReviews = async (id: string | number) => {
  const {data} = await BaseService.get<MovieReviewsModel>('movie/' + id + '/reviews')
  console.log(data);
  return data
}
