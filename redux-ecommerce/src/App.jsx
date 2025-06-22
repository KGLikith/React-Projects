
import Header from './containers/Header'
import { Route,Routes, } from "react-router-dom"

import ProductDetail from './containers/ProductDetail'
import ProductListing from './containers/ProductListing'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} ></Route>
        <Route path='/product/:productId' element={<ProductDetail />} ></Route>
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  )
}

export default App
