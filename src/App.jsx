import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Product from "./pages/Product"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
