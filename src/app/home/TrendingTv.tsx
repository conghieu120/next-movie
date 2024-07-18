import CardItem from '@/components/CardItem'
import { getTrendingTv } from '@/services/trendingServices'

const TrendingTv = async () => {
  const trendingTv = await getTrendingTv()
  return (
    <section className='container m-auto p-4'>
      <h2 className='text-2xl font-bold mb-2'>Trending TV Serials</h2>
      <ul className='flex gap-x-2 w-full overflow-x-auto'>
        {
          trendingTv.results.map((tv) => (
            <li
              className='flex-shrink-0'
              key={tv.id}
            >
              <CardItem
                data={{
                  id: tv.id,
                  imageSrc: tv.poster_path,
                  title: tv.name,
                  date: tv.first_air_date,
                  views: tv.popularity,
                  type: 'tv'
                }}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default TrendingTv