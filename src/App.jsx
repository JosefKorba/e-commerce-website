import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from './pages/CheckoutPage';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/:category/:productId" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
 );
}

export default App;