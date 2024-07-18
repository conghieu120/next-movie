import HorizontalCard from '@/components/HorizontalCard'
import { TvDetailModel } from '@/services/Tv.type'
import slugify from 'slugify'

const Seasons = ({ data }: { data: TvDetailModel }) => {
  return (
    <section className='container m-auto p-4 max-w-5xl'>
      <h2 className='text-center text-2xl font-bold my-4'>Seasons</h2>
      <ul className='justify-center'>
        {
          data.seasons.map(season => (
            <li key={season.id} className='mb-6'>
              <HorizontalCard
                description={season.overview}
                title={season.name}
                imageSrc={season.poster_path}
                shortNote={'Season: ' + season.season_number + ' - ' + season.episode_count + ' episodes'}
                href={'/season/' + data.id + '-' + season.season_number + '-' + slugify(season.name)}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Seasons