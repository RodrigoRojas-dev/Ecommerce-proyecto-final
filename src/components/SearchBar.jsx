import { useState } from "react"
import { useSearch } from "../context/SearchContext"

const SearchBar = () => {
  const { search, setSearch } = useSearch()

  console.log(search);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  )
}

export { SearchBar }