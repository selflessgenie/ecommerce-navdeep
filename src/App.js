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
      <BrowserRouter basename="/fashion-site">
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/saree' element={<ShopCategory banner = {blouse_banner} category = "saree"/>}/>
          <Route path='/blouse' element={<ShopCategory banner = {blouse_banner} category = "blouse"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
