import { BaseService } from "."
import { MovieDetailModel } from "./Movie.type"

export const getMovieByIdService = async (id: string | number) => {
  const {data} = await BaseService.get<MovieDetailModel>('movie/' + id)
  return data
}
