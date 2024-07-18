import { BaseService } from "."
import { SeasonDetailModel } from "./Season.type"

export const getDetailSeason = async ({ tvId, seasonNumber }: { tvId: string | number, seasonNumber: string | number }) => {
  const {data} = await BaseService.get<SeasonDetailModel>('tv/'+tvId+'/season/'+seasonNumber)
  return data
}
