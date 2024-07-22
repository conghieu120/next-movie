import { BaseService } from "."
import { SeasonDetailModel } from "./Season.type"

export const getDetailSeason = async ({ tvId, seasonNumber }: { tvId: string | number, seasonNumber: string | number }) => {
  const {data} = await BaseService.get<SeasonDetailModel>('tv/'+tvId+'/season/'+seasonNumber)
  return data
}

export const getSeasonVideos = async ({tvId, seasonNumber}: { tvId: string | number, seasonNumber: string | number }) => {
  const { data } = await BaseService.get('tv/'+tvId+'/season/'+seasonNumber+'/videos')
  return data
}
