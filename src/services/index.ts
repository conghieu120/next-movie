import axios from "axios";
import { MovieParamsFilterModel } from "./MovieParamsFilter.type";
import { GetMoviesResPonseModel } from "./Movie.type";

export const BaseService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: process.env.API_READ_ACCESS_TOKEN
  }
})

export const getMovies = async (params?: MovieParamsFilterModel) => {
  const { data } = await BaseService.get<GetMoviesResPonseModel>('discover/movie', { params })
  return data
}
