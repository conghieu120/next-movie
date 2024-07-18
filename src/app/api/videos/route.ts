import { getMovieVideos } from "@/services/movieServices";
import { getTvVideos } from "@/services/tvServices";
import { NextResponse, NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  try {
    const movieId = request.nextUrl.searchParams.get('movie')
    const tvId = request.nextUrl.searchParams.get('tv')
    if (movieId?.trim()) {
      const videos = await getMovieVideos(movieId)
      return NextResponse.json(videos);
    } else if (tvId?.trim) {
      const videos = await getTvVideos(tvId)
      return NextResponse.json(videos);
    }
    return NextResponse.json({ message: "Invalid", status: 400 })
  } catch (error) {
    return NextResponse.json({error, status: 400})
  }
}
