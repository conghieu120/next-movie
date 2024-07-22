import { search } from "@/services"
import SearchItem from "./SearchItem"

const Search = async ({searchParams}: { searchParams: {k: string} }) => {
  const searchResults = await search(searchParams.k)

  return (
    <section className="container m-auto">
      <p className="py-4">
        Search results for: {searchParams.k}
      </p>
      <ul className='flex justify-center gap-x-2 w-full overflow-x-auto flex-wrap'>
        {
          searchResults.results.map((result) => (
            <SearchItem key={result.id} data={result}/>
          ))
        }
      </ul>
    </section>
  )
}

export default Search