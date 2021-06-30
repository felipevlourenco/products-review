/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'

export type SearchContextType = {
  searchInput: string
  setSearchInput: (v: string) => void
}

export const SearchContext = createContext<SearchContextType>({
  searchInput: '',
  setSearchInput: () => {}
})

export const useSearch = (): SearchContextType => useContext(SearchContext)
