import { useState } from "react"
import { useSearch } from "../context/SearchContext"

const SearchBar = () => {
  const { search, setSearch } = useSearch()

  return (
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Buscar Productos..."
        className="searchbar"
      />
  )
}

export { SearchBar }