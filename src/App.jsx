import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import Collect from "./pages/Collect"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/collect" element={<Collect />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
