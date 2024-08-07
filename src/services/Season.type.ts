export interface CrewModel {
  job: string
  department: string
  credit_id: string
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
}

export interface EpisodeModel {
  air_date: string
  episode_number: number
  episode_type: string
  id: number
  name: string
  overview: string
  production_code: string
  runtime?: number
  season_number: number
  show_id: number
  still_path: string
  vote_average: number
  vote_count: number
  crew: CrewModel[]
  guest_stars: {
    character: string
    credit_id: string
    order: number
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
  }[]
}

export interface SeasonDetailModel {
  _id: string
  air_date: string
  episodes: EpisodeModel[]
  name: string
  overview: string
  id: number
  poster_path: string
  season_number: number
  vote_average: number
}