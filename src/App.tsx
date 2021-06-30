import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SearchContext } from './contexts/search'
import Header from './components/Header'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import styles from './App.module.scss'

const App = (): React.ReactElement => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className={styles.app}>
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  )
}

export default App
