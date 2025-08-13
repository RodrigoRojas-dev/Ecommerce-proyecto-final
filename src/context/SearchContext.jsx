import { createContext, useContext, useState } from "react"

const SearchContext = createContext();

const SearchProvider = (props) => {
  const [search, setSearch] = useState("")

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  )
}

const useSearch = () => useContext(SearchContext)

export { SearchProvider, useSearch }