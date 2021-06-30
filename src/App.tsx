import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import styles from './App.module.scss'

const App = (): React.ReactElement => {
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // const handleProductClick = (product: Product) => {
  //   setSelectedProduct(product)
  // }

  return (
    // TODO: Create header with search bar
    <div className={styles.app}>
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
    </div>
  )
}

export default App
