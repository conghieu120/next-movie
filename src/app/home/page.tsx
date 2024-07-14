import { getTrendingAll } from "@/services/trendingServices";
import Search from "./Search";
import TrendingMovies from "./TrendingMovies";
import TrendingTv from "./TrendingTv";
import { sample } from "lodash";

const Home = async () => {
  const trendingAll = await getTrendingAll();
  return (
    <div>
      <div
        className="w-full h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original" +
            sample(trendingAll.results)?.backdrop_path +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Search />
      </div>
      <TrendingMovies />
      <TrendingTv />
    </div>
  );
};

export default Home;
