import axios from "axios";

export const BaseService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: process.env.API_READ_ACCESS_TOKEN
  }
})

export interface SearchItemModel {
  backdrop_path: string
  id: number,
  name: string
  original_name: string
  overview: string
  poster_path: string
  media_type: string
  adult: false,
  original_language: string
  genre_ids: number[],
  popularity: number,
  first_air_date: string
  vote_average: number,
  vote_count: number,
  origin_country: string[],
  title: string,
}

interface SearchResponseModel {
  page: number;
  total: number;
  results: SearchItemModel[];
}

export const search = async (query: string) => {
  const { data } = await BaseService.get<SearchResponseModel>('search/multi', { params: { query } })
  return data
}
