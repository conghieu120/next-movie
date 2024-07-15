import { BaseService } from "."
import { TvDetailModel } from "./Tv.type"

export const getTvDetail = async (tvSeriesId: string | number) => {
  const { data } = await BaseService.get<TvDetailModel>('tv/' + tvSeriesId)
  return data
}
