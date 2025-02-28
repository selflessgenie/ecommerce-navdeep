import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import blouse_banner from './Components/Assets/banner_women.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/ecommerce-navdeep' element={<Shop/>}/>
          <Route path='/ecommerce-navdeep/saree' element={<ShopCategory banner = {blouse_banner} category = "saree"/>}/>
          <Route path='/ecommerce-navdeep/blouse' element={<ShopCategory banner = {blouse_banner} category = "blouse"/>}/>
          <Route path='/ecommerce-navdeep/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/ecommerce-navdeep/cart' element={<Cart/>}/>
          <Route path='/ecommerce-navdeep/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
