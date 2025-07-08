import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refunds from "./pages/Refunds";
import Cookies from "./pages/Cookies";
import Productqsgigfq7s from "./pages/Productqsgigfq7s";
import Product1e7jll7vx from "./pages/Product1e7jll7vx";
import Product3r11nzmjw from "./pages/Product3r11nzmjw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/product/qsgigfq7s" element={<Productqsgigfq7s />} />
        <Route path="/product/1e7jll7vx" element={<Product1e7jll7vx />} />
        <Route path="/product/3r11nzmjw" element={<Product3r11nzmjw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;