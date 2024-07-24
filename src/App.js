import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import ProductDetails from "./compoenents/ProductDetails";
import Signin from "./compoenents/signin";
import Product from "./compoenents/Product";
import NotFound from "./compoenents/NotFound";
import Cart from "./compoenents/Cart";
import Contact from "./compoenents/Contact"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/sign" element={<Signin />}/>
        <Route path="about" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="products" component={<Product/>} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
