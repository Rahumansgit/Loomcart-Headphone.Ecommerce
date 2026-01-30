import { Route, Routes, Link } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import ProductDetails from "./Pages/ProductDetails"
import Footer from "./Components/Footer"
import MobileNav from "./Components/MobileNav"

function App() {
 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={
            <h1 className="text-center text-2xl mt-20">404 Page Not Found! <br /> Click here to go <Link to="/" className="underline text-sky-600">Home</Link></h1>
            } />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

export default App
