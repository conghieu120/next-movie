"use client";
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react";

const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const onSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!search?.trim()) return
    router.push('/search?k='+ search)
  };

  return (
    <form className="w-full flex justify-center" onSubmit={onSearch}>
      <div className="w-2/3 relative">
        <input
          className="w-full h-10 m-auto rounded-3xl p-2 px-6 dark:bg-slate-900"
          placeholder="Search movies, actors, TV shows, ..."
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className="absolute right-0 bg-green-500 rounded-3xl py-2 px-4 text-white font-bold dark:bg-green-800 dark:text-gray-300"
        >Search</button>
      </div>
    </form>
  );
};

export default Search;
