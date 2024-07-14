"use client";
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react";

const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const onSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!search) return
    router.push('/search?k='+ search)
  };

  return (
    <form className="w-full flex justify-center" onSubmit={onSearch}>
      <input
        className="w-2/3 h-10 m-auto rounded-3xl p-2 px-6"
        placeholder="Search movies, actors, TV shows, ..."
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
