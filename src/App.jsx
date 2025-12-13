import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App
