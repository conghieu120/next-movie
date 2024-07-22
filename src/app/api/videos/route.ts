import { getMovieVideos } from "@/services/movieServices";
import { getSeasonVideos } from "@/services/seasonServices";
import { getTvVideos } from "@/services/tvServices";
import { isEmpty } from "lodash";
import { NextResponse, NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  try {
    const movieId = request.nextUrl.searchParams.get('movie')
    const tvId = request.nextUrl.searchParams.get('tv')
    const seasonNumber = request.nextUrl.searchParams.get('season')
    let videos: any;
    if (movieId?.trim()) {
      videos = await getMovieVideos(movieId)
    } else if (tvId?.trim() && seasonNumber?.trim()) {
      videos = await getSeasonVideos({ seasonNumber, tvId })
    } else if (tvId?.trim()) {
      videos = await getTvVideos(tvId)
    }
    if (!!videos) {
      return NextResponse.json(videos);
    }
    return NextResponse.json({ message: "Invalid", status: 400 })
  } catch (error) {
    return NextResponse.json({error, status: 400})
  }
}
