import './App.css';
import { MainPage } from './pages/MainPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductPage } from './pages/ProductPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/products" element={<ProductPage />}></Route>
                    <Route
                        path="/products/:productId"
                        element={<ProductDetailPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
