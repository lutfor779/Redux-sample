import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Products from './pages/Products/Products/Products';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />}>
            <Route index element={<Products />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
