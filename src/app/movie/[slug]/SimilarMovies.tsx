import CardItem from '@/components/CardItem'
import { getMoviesSimilar } from '@/services/movieServices'

const SimilarMovies = async ({movieId}: {movieId: string | number}) => {
  const similarMovies = await getMoviesSimilar(movieId)
  return (
    <section className='container m-auto py-6 px-4'>
      <h3 className='text-xl font-bold mb-2'>Similar movies</h3>
      <ul className='overflow-x-auto w-full flex gap-2'>
        {
          similarMovies.results.map(movie => (
            <li key={movie.id} className='flex-shrink-0'>
              <CardItem
                data={{
                  id: movie.id,
                  imageSrc: movie.poster_path,
                  title: movie.title,
                  views: movie.popularity,
                  date: movie.release_date
                }}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SimilarMovies